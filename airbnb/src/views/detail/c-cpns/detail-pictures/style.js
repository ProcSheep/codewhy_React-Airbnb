import styled from "styled-components";


export const PictureWrapper = styled.div`
  position: relative;

  > .pictures {
    display: flex;
    height: 600px;
    background-color: #000;

    /* 蒙版思路: 
      默认pictures的所有蒙版都是显示的; 但是hover到对应item图片时,这张图片没有蒙版,而其他的图片有蒙版,优先级更高 使用!important
      css中找父元素或兄弟元素很难实现,所以这里利用后代元素统筹控制实现效果,并使用层叠覆盖,后面的item:hover覆盖前面的蒙版样式
    */
    .cover {
      opacity: 1 !important;
    }
    .item:hover {
      .cover {
        opacity: 0 !important;
      }
    }

  }

  .left, .right {
    width: 50%;
    height: 100%;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: transform 0.3s ease-in;
      }

      /* 蒙版样式 */
      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.2);
        transition: opacity 200ms ease;
      }
      
      /* 图片放大0.1倍 */
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  /* 右侧4张图片,额外排版 */
  .right {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
    }
  }

  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
`