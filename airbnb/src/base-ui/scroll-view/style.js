import styled from "styled-components"

export const ViewWrapper = styled.div`
  /* 左右箭头的绝对定位-父相 */
  position: relative; 
  
  .scroll{
    /* 为了不让左右按钮被遮挡,额外嵌套一层div,让溢出隐藏仅作用于滚动tabs */
    overflow: hidden;

    .scroll-content{
      /* 为子节点获取offsetLeft,父元素必须为定位元素 */
      position: relative; 
      display: flex;    
      transition: transform 400ms ease;
    }
  }

  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      /* 相对自身? */
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`