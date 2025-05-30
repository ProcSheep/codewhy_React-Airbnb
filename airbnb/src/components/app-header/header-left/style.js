import styled from 'styled-components'

export const LeftWrapper = styled.div`
    flex: 1;
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};
  .left{
    display: flex;
    align-items: center;
    .logo{
      padding-left: 15px;
      cursor: pointer;
    }
    .text{
      cursor: pointer;
      padding-left: 8px;
      color: ${props => props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};
    }
  } 
`