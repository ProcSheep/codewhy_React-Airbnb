import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content{
    position: relative;
    display: flex;
    transition: transform 200ms;

    > *{
      flex-shrink: 0;
    }
  }
`