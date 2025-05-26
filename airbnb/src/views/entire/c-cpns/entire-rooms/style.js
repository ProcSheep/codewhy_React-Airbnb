import styled from "styled-components";

export const RoomsWrapper = styled.div`
  padding: 20px 30px;
  position: relative;
  
  .title{
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 10px 10px;
  }

  .list{
    display: flex;
    flex-wrap: wrap;
  }

  /* 第一个子孩子,防止cover重名误改了其他元素的样式 */
  > .cover{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(255,255,255,.8)
  }
`