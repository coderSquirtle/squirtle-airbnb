import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  /* background-color: blue!important; */

  .i-content {
    display: flex;
    position: relative;
    transition: transform 200ms ease;
    /* background-color: red; */

    > * {
      flex-shrink: 0;
    }
  }
`;
