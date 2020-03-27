import React from "react";
import styled from "styled-components";
import { Spin } from "antd";

const StyledSpinner = styled.div`
  text-align: center;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 200px;
`;

const Loading = () => {
  return (
    <StyledSpinner>
      <Spin size="large" />
    </StyledSpinner>
  );
};

export default Loading;
