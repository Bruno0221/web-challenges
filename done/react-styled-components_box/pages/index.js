import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import StyledBox from "@/components/BoxWithStyledComponents/index.js";
import styled from "styled-components";

const FlexContainer = styled.section`
  display: flex;
`;

export default function HomePage() {
  return (
    <FlexContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox isBlack />
    </FlexContainer>
  );
}
