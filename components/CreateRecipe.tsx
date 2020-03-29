import * as _ from "lodash";
import { Form, Row, Col, Button } from "antd";
import { submitForm } from "../utils/submitForm";
import { GenerateIngredients } from "./GenerateIngredients";
import {
  GenerateInput,
  GenerateTextInput,
  GenerateDropdown
} from "./GenerateFields";
import { useFetchUser } from "../utils/user";
import { useMutation } from "@apollo/react-hooks";
import { createRecipeGraphQL } from "../graphql/mutations/createRecipe";
import { recipesGraphQL } from "../graphql/queries/recipes";
import Loading from "./notify/Loading";
import { PictureUploader } from "./PictureUploader";
import { useState } from "react";

export const CreateRecipe = () => {
  const [createRecipeMutation, { loading }] = useMutation(createRecipeGraphQL);
  const { user, loading: isFetchingUser } = useFetchUser();
  const [recipeState, setRecipeState] = useState({
    isPicUploading: false
  });
  const owner = _.get(user, "sub") || "";

  const initiateCreateRecipe = () => {
    createRecipeMutation({
      refetchQueries: [
        { query: recipesGraphQL },
        { query: recipesGraphQL, variables: { where: { owner } } }
      ],
      variables: {
        data: {
          ...inputs,
          owner
        }
      }
    });
  };

  const {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleAddIngredient,
    handleDeleteIngredient,
    handleSubmit,
    handleSubmitImages
  } = submitForm(
    {
      title: "",
      description: "",
      content: "",
      status: "DRAFT",
      ingredients: []
    },
    initiateCreateRecipe
  );

  if (isFetchingUser) return <Loading />;

  return (
    <Form onFinish={handleSubmit}>
      <GenerateInput
        name="title"
        value={inputs.title}
        handleInputChange={handleInputChange}
      />
      <GenerateInput
        name="description"
        value={inputs.description}
        handleInputChange={handleInputChange}
      />
      <GenerateTextInput
        name="content"
        value={inputs.content}
        handleInputChange={handleInputChange}
      />
      <GenerateIngredients
        names={["amount", "unit", "type"]}
        values={inputs.ingredients}
        handleAddIngredient={handleAddIngredient}
        handleDeleteIngredient={handleDeleteIngredient}
        handleDropdownChange={handleDropdownChange}
        handleInputChange={handleInputChange}
      />
      <Row>
        <GenerateDropdown
          name="status"
          value={inputs.status}
          handleDropdownChange={handleDropdownChange}
        />
        <Col span={4}>
          <Form.Item label="Upload Image">
            <PictureUploader
              handleSubmitImages={handleSubmitImages}
              setRecipeState={setRecipeState}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Create Recipe">
            <Button
              disabled={loading || recipeState.isPicUploading}
              type="primary"
              htmlType="submit"
            >
              Create Recipe
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
