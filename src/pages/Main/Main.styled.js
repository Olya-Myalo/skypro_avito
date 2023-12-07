import styled from 'styled-components';

export const BodyMain = styled.body`
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    color: #000000;
`
export const WrapperMain = styled.div`
    width: 100%;    
    min-height: 100%;
    overflow: hidden;
    background-color: #F1F1F1;
    display: flex;
    flex-direction: column;
`
export const Container = styled.div`
    max-width: 1440px;
    width: 100%;        
    margin: 0 auto;    
    background-color: #FFFFFF;  
    @media screen and (max-width: 320px) {
        width: 100%;
        min-width: 320px;
        min-height: 100vh;
        background-color: #FFFFFF;
    }
`
export const Header = styled.header`
    background-color: #009EE4; 
    @media screen and (max-width: 320px) {
        display: none;
    }
`
export const HeaderNav = styled.nav`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0 10px;
    height: 79px;
    display: flex;
    align-items: center;
    justify-content: end; 
`
export const BtnMainEnter = styled.button`
    width: 224px;
    height: 40px;
    border: 1px solid #FFFFFF;
    border-radius: 6px;
    background-color: transparent;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1;
    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #FFFFFF;
    }
`
export const Main = styled.main`

`
export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 52px 10px 37px;
    @media screen and (max-width: 320px) {
        padding: 85px 10px 84px;
    }
`
export const MainTitle = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
    @media screen and (max-width: 320px) {
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        margin-bottom: 20px;
        text-align: center;
        position: relative;

        &::before {
                // content: "";
                display: block;
                width: 12px;
                height: 12px;
                background-color: transparent;
                border-top: 2px solid #000000;
                border-left: 2px solid #000000;
                transform: rotate(-45deg);
                text-align: left;
                position: absolute;
                top: 9px;
                left: 13px;
                cursor: pointer;
            }
    }
`
export const MainContent = styled.div`
    width: 100%;
    margin: 0 auto;
`