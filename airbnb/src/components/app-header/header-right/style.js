import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.text.primaryColor};
  font-size: 14px;
  font-weight: 600;

  .btns{
    display: flex;
    .btn{
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      margin: 0 5px;
      border-radius: 22px;
      cursor: pointer;

      &:hover{
      background-color: #f5f5f5;
      }
    }
  }

  .profile{
    position: relative;
    display: flex;
    width: 42px;
    height: 42px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 21px;
    background-color: #fff;
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}

    .panel{
      position: absolute;
      right: 0;
      top: 60px;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 4px rgba(0,0,0,.18); 
      z-index: 99;    

      .top, .bottom{
        padding: 10px 0;

        .item{
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover{
            background-color: #f5f5f5;
          }
        }
      }

      .top{
        border-bottom: 1px solid #ddd;
      }
    }
  }
`