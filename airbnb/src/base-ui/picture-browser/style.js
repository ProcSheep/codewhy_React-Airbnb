import styled from "styled-components";


export const PicBrowserWrapper = styled.div`
  /* 图片浏览器要覆盖整个屏幕 */
  position: fixed;
  left: 0;
  right: 0;
  top:  0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 999;
  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      /* 动画css */
      /* 初始状态 */
      .pic-enter{
        /* 依据左右箭头定义动画 */
        transform: translateX(${props => props.$isNext ? '100%' : '-100%'});
        opacity: 0;
      }
      /* 进入时的动画 */
      .pic-enter-active{
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms ease; 
      }
    }

  }

  /* 轮播下方指示器等样式的显示 */
  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    
    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .count{
          user-select: none; /* 禁止文字被选中,点击左右按钮老是选中此段文字 */
        }

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${props => props.$showList ? '67px': '0px'};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`