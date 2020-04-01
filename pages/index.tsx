import styled from "styled-components";
import { MainLayout } from "../components/layout/MainLayout";
import { RecipesList, queryEnum } from "../components/RecipeList";
import { Status } from "../generated/apollo-components";
import { useFetchUser } from "../utils/user";
import * as _ from "lodash";
import Loading from "../components/notify/Loading";
import { useRouter } from "next/router";

const StyledHeader = styled.h1`
  ${({ theme }) => `	 
		font-size: 2em;
		text-align: left;
		padding: ${theme["padding-small"]} ${theme["padding-small"]};
	`}
`;

const Index = props => {
  const { user, loading: isFetchUser } = useFetchUser();
  const router = useRouter();

  const owner = _.get(user, "sub");
  const options = { variables: { where: { status: Status.Published } } };

  if (isFetchUser) return <Loading />;
  if (!user) {
    router.replace("/");
  }
  return (
    <MainLayout title="Recipes">
      <StyledHeader>Index</StyledHeader>
      <RecipesList
        parentRoute="recipe"
        queryType={queryEnum.recipes}
        options={options}
      />
    </MainLayout>
  );
};

export default Index;
