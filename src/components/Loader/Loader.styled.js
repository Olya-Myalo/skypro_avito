import styled from 'styled-components'

export const HeaderStyleMyProfile = styled.div`
display: flex;
justify-content: center;
height: 100vh;
align-items: center; 
margin-right: 70px;
}
`

export const Preloader = styled.div`
  width: 100px;
  height: 100px;
  position: relative;

  div {
    box-sizing: border-box !important;
  }

  > div {
    position: absolute;
    width: 165.9px;
    height: 165.9px;
    border-radius: 50%;
    border: 14.22px solid #000;
    border-color: #009ee4 transparent #009ee4 transparent;
    animation: spin 1s linear infinite;
  }

  > div:nth-child(2) {
    border-color: transparent;
  }

  > div:nth-child(2) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  > div:nth-child(2) div:after {
    left: -14.22px;
    top: 61.62px;
    box-shadow: 151.68px 0 0 0 #009ee4;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
