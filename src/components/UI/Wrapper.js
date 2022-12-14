import styled from 'styled-components';
import { below } from '../../Styles/utilities';

export const LayoutPage = styled.div`
  max-width: 1440px;
  min-height: 900px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  max-width: 1440px;
  padding: 150px;
  form {
    ${below.small`
      width: 100%;
    `}
  }
  ${below.large`
    padding: 150px 0px;
  `}
  ${below.small`
    width: 100%;
  `}
`;