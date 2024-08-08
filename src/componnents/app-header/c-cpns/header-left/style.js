import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* 使用主题色 */
  color: ${(props) => props.theme.color.primaryColor};

  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`;
