import styled from "styled-components";

export const PaginationWrapper = styled.div`
  /* 单个分页器的样式 */
  .MuiPaginationItem-page{
    &:hover{
      text-decoration: underline;
    }
  }
  /* 分页器+选中状态下的样式 */
  .MuiPaginationItem-page.Mui-selected{
    color: #fff;
    background-color: #222;
  }

  .info{
    display: flex;
    flex-direction: column;
    align-items: center;

    .desc{
      margin: 5px;
    }
  }
`