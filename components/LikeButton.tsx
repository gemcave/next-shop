import { UserLike } from "../generated/apollo-components";
import styled from "styled-components";
import Icon, { HeartOutlined, HeartFilled } from "@ant-design/icons";
import * as _ from "lodash";
import { useFetchUser } from "../utils/user";
import { useMutation } from "@apollo/react-hooks";
import { createUserLikeGraphQL } from "../graphql/mutations/createUserLike";
import { deleteUserLikeGraphQL } from "../graphql/mutations/deleteUserLike";
import { userLikesGraphQL } from "../graphql/queries/userLikes";
import { recipeGraphQL } from "../graphql/queries/recipe";

const StyledSpan = styled.span`
  ${({ theme }) => `
    padding-left: 8px;
    font-size: ${theme["font-size-xs"]} !important;
    color: ${theme["heart-color"]};
    i {
        padding-left: 2px;
    }
`}
`;

export const LikeButton = ({
  userLikes,
  recipeId
}: {
  userLikes: UserLike[];
  recipeId: string;
}) => {
  const { user, loading: isFetchingUser } = useFetchUser();
  const owner = _.get(user, "sub");
  const userLike = _.filter(userLikes, { user: owner });
  const hasUserLiked = userLike.length > 0 ? true : false;

  const [
    createUserLikeMutation,
    { loading: createUserLikeLoading }
  ] = useMutation(createUserLikeGraphQL);
  const [
    deleteUserLikeMutation,
    { loading: deleteUserLikeLoading }
  ] = useMutation(deleteUserLikeGraphQL);

  if (_.isEmpty(owner)) {
    return (
      <StyledSpan>
        {` ${userLikes.length}`}
        <HeartOutlined twoToneColor="#eb2f96" />
      </StyledSpan>
    );
  }

  return (
    <StyledSpan>
      {` ${userLikes.length}`}
      <div
        style={{ display: "inline" }}
        onClick={() => {
          if (!hasUserLiked) {
            createUserLikeMutation({
              refetchQueries: [
                {
                  query: recipeGraphQL,
                  variables: { where: { id: recipeId } }
                },
                {
                  query: userLikesGraphQL,
                  variables: { where: { user: owner } }
                }
              ],
              variables: {
                data: {
                  user: owner,
                  recipe: {
                    connect: { id: recipeId }
                  }
                }
              }
            });
          } else {
            deleteUserLikeMutation({
              refetchQueries: [
                {
                  query: recipeGraphQL,
                  variables: { where: { id: recipeId } }
                },
                {
                  query: userLikesGraphQL,
                  variables: { where: { user: owner } }
                }
              ],
              variables: {
                where: {
                  id: userLike[0].id
                }
              }
            });
          }
        }}
      >
        {hasUserLiked ? (
          <HeartFilled style={{ color: "#eb2f96" }} />
        ) : (
          <HeartOutlined twoToneColor="#eb2f96" />
        )}
      </div>
    </StyledSpan>
  );
};
