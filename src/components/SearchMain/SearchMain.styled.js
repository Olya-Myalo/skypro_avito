import styled from 'styled-components';

export const Search = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 0;        
    max-width: 1178px;
    margin: 0 auto;
    padding: 31px 10px 0px;
    @media screen and (max-width: 320px) {
        width: 100%;
        height: 55px;
        background-color: #009EE4;
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        margin-bottom: 0px;
        padding: 11px 17px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 3;
    }
`
export const LogoLink = styled.a`
    @media screen and (max-width: 320px) {
        display: none;
    }
`
export const LogoImg = styled.img`
    width: 54px;
    height: auto;
`
export const LogoLinkMob = styled.a`
    display: none;
    @media screen and (max-width: 320px) {
        display: block;
        width: 32px;
        height: 32px;
    }
`
export const LogoImgMob = styled.img`
    width: 54px;
    height: auto;
    @media screen and (max-width: 320px) {
        width: 32px;
        height: auto;
        display: block;
        object-fit: cover;
    }
`
export const SearchForm = styled.form`
    margin-left: 60px;        
    max-width: 1044px;
    width: 100%;
    display: flex;
    @media screen and (max-width: 320px) {
        margin-left: 10px;
        max-width: 1044px;
        width: 100%;
        display: flex;
    }
`
export const SearchText = styled.input`
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;

    background-color: transparent;
    padding: 13px 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;

    &::placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;            
        }
        @media screen and (max-width: 320px) {
            display: none;
        }
`
export const SearchTextMob = styled.input`
    display: none;
    @media screen and (max-width: 320px) {
        display: inline-block;
        width: 100%;
        height: 32px;
        border: none;
        border-radius: 30px;

        background-color: #FFFFFF;
        padding: 5px 17px;
        font-size: 14px;
        line-height: 21px;
        color: #000000;

        &::placeholder {
            background-color: transparent;
            color: #B3B3B3;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
    }
`
export const SearchBtn = styled.button`
    margin-left: 10px;
    width: 158px;
    height: 50px;
    background-color: #009EE4;
    border: 1px solid #009EE4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    &:hover {
        background-color: #0080C1;
    }
    @media screen and (max-width: 320px) {
        display: none;
    }
`