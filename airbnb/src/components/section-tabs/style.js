import styled from "styled-components"


export const TabsWrapper = styled.div`
  /* 交给base-ui: scroll-view处理 */
  /* display: flex; */
  /* X轴自动添加滚动条 */
  /* overflow-x: auto; */

  .item {
    /* 最小宽度120px; 不要压缩宽度(即使item很宽) */
    flex-basis: 120px;
    flex-shrink: 0;

    box-sizing: border-box;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    box-shadow: ${props => props.theme.mixin.boxShadow};
    white-space: nowrap;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    /* 同时拥有item active */
    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`