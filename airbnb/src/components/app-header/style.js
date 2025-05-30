import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  .content{
    position: relative;
    z-index: 99;
    background-color: ${props => props.theme.isAlpha ? "rgba(255, 255, 255, 0)" : "rgba(255,255,255,1)"};
    border-bottom: 1px solid;
    border-bottom-color: ${props => props.theme.isAlpha ? "rgba(233, 233, 233, 0)" : "rgba(233,233,233,1)"};
    transition: all 250ms ease;

    .top{
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover{
    position: fixed;
    z-index: 19;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3)
  }

  &.fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
`

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${props => props.$isSearch ? '100px' : '0'};
`