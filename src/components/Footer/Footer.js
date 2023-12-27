
import * as S from './Footer.styled'

const Footer = () => {
  return (
    <S.Footer>
    <S.FooterContainer>
      <S.FooterImg>
        <a href="" target="_self">
          <S.FooterImgImg src="img/footer1.svg" alt="home" />
        </a>
      </S.FooterImg>
      <S.FooterImg>
        <a href="" target="_self">
          <S.FooterImgImg src="img/footer2.png" alt="home" />
        </a>
      </S.FooterImg>
      <S.FooterImg>
        <a href="" target="_self">
          <S.FooterImgImg src="img/footer3.svg" alt="home" />
        </a>
      </S.FooterImg>
    </S.FooterContainer>
  </S.Footer>
  );
};

export default Footer;