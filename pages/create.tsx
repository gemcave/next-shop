import { MainLayout } from "../components/layout/MainLayout";
import styled from "styled-components";
import { CreateRecipe } from "../components/CreateRecipe";
import { useFetchUser } from "../utils/user";
import Loading from "../components/notify/Loading";
import { useRouter } from "next/router";

const StyledHeader = styled.h1`
  ${({ theme }) => `
        padding: ${theme["padding-small"]} ${theme["padding-small"]};
    `}
`;

const Create = () => {
  const router = useRouter();
  const { user, loading: isFetchUser } = useFetchUser();

  if (isFetchUser) return <Loading />;
  if (!user) {
    router.replace("/");
  }
  return (
    <MainLayout title="Create Recipe">
      <StyledHeader>Create Recipe</StyledHeader>
      <CreateRecipe />
    </MainLayout>
  );
};

export default Create;
