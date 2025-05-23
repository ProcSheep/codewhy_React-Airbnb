import styled from "styled-components";


export const FooterWrapper = styled.div`
  display:flex;
  margin-top: 10px;

  .info{
    display:flex;
    align-items: center;
    justify-content: center;

    font-size: 17px;
    font-weight: 700;
    color: ${props => props.name ? props.theme.color.secondaryColor: "#000"};

    .text{
      margin-right: 6px;
    }

    &:hover{
      text-decoration: underline;
    }
  }
`