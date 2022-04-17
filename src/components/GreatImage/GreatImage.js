import React from "react";

//styles
import { Wrapper, Content, Text } from "./GreatImage.styles";

const GreatImage = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);
export default GreatImage;
