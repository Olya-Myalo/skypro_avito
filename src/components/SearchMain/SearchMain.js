import * as S from './SearchMain.styled'

const SearchMain = () => {
    return (
        <S.Search>
            <S.LogoLink href="#" target="_blank">
                <S.LogoImg src="../img/logo.png" alt="logo" />
            </S.LogoLink>
            <S.LogoLinkMob href="#" target="_blank">
                <S.LogoImgMob src="../img/logo-mob.png" alt="logo" />
            </S.LogoLinkMob>
            <S.SearchForm action="#">
                <S.SearchText type="search" placeholder="Поиск по объявлениям" name="search" />
                <S.SearchTextMob type="search" placeholder="Поиск" name="search-mob" />
                <S.SearchBtn>Найти</S.SearchBtn>
            </S.SearchForm>
        </S.Search>
    );
};

export default SearchMain;