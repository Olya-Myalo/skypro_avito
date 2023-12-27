
import { useState } from 'react';
import * as S from './Search.styled'

const Search = ({ products, setProductsShow }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchText) {
      const searchProductsList = products.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );

      setProductsShow(searchProductsList);
    } else {
      setProductsShow(products);
    }
  };

  return (
    <S.MainSearch>
    <S.SearchLogoLink href="#" target="_blank">
      <S.SearchLogoImg src="img/logo.png" alt="logo" />
    </S.SearchLogoLink>
    <S.SearchLogoMobLink href="#" target="_blank">
      <S.SearchLogoMobImg src="img/logo-mob.png" alt="logo" />
    </S.SearchLogoMobLink>
    <S.SearchForm action="#" onSubmit={handleSearch}>
      <S.SearchText
        type="search"
        placeholder="Поиск по объявлениям"
        name="search"
        onChange={(event) => {
          setSearchText(event.target.value)
        }}
      />
      <S.SearchTextMob
        type="search"
        placeholder="Поиск"
        name="search-mob"
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <S.SearchBtn type="submit">Найти</S.SearchBtn>
    </S.SearchForm>
  </S.MainSearch>
  );
};

export default Search;