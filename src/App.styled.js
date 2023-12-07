import styled from 'styled-components'

export const MainApp = styled.div`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

  }

  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    color: white;

  }

  button,
  ._btn {
    cursor: pointer;
  }

  ul li {
    list-style: none;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto') format('Roboto');
    font-weight: 400;
    font-style: normal;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    /* font-family: 'Roboto', sans-serif; */
    color: #ffffff;
    background-color: #FAFAFA;

  }

  ._btn-icon:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }

  ._btn-text:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }

  ._btn-icon:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }

  ._btn-icon:active .track-play__like-svg,
  ._btn-icon:active .track-play__dislike-svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
  margin: 0;
  padding: 0;
  
`

export const AppHeader = styled.header``