import styled from "styled-components";
import { below } from "../../Styles/utilities";

export const FormStyled = styled.div`
  margin-top: 62px;
  background-color: #fff;
  border-radius: 15px;
  width: 400px;
  box-shadow: 0 6px 10px 0 rgba(128, 98,96, 0.16);
  display: flex;
  flex-direction: column;
  ${below.small`
    width: 100%
  `}
`;

export const FormContent = styled.div`
  padding: 24px 32px 15px;
  border-radius: 15px 15px;
  background-color: #fff;
`;