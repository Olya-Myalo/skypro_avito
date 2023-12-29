import { Link } from 'react-router-dom'
import MainMenu from '../../components/MainMenu/MainMenu'
import * as S from './SellerProfile.styled'
import AdsComponent from '../../components/AdItem/AdItem'

const SellerProfile = () => {

  return (
        <S.MainContainer>
          <S.MainCenterBlock>
            <MainMenu />
            <S.MainH2>Профиль продавца</S.MainH2>
            <S.MainProfileSell>
              <S.ProfileSellContent>
                <S.ProfileSell>
                  <S.SellerLeft>
                    <S.SellerImg>
                      <Link href="" target="_self">
                        <S.SellerImgImg src="#" alt="" />
                      </Link>
                    </S.SellerImg>
                  </S.SellerLeft>
                  <S.SellerRight>
                    <S.SellerTitle>Кирилл Матвеев</S.SellerTitle>
                    <S.SellerCity>Санкт-Петербург</S.SellerCity>
                    <S.SellerCity>Продает товары с августа 2021</S.SellerCity>
                    <S.SellerImgMobBlock>
                      <S.SellerImgMob>
                        <Link href="" target="_self">
                          <S.SellerImgMobImg src="#" alt="" />
                        </Link>
                      </S.SellerImgMob>
                    </S.SellerImgMobBlock>
                    <S.SellerBtn>
                      Показать&nbsp;телефон
                      <S.SellerBtnSpan>
                        8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                      </S.SellerBtnSpan>
                    </S.SellerBtn>
                  </S.SellerRight>
                </S.ProfileSell>
              </S.ProfileSellContent>
            </S.MainProfileSell>
            <S.MainTitle>Товары продавца</S.MainTitle>
          </S.MainCenterBlock>

          <AdsComponent />
        </S.MainContainer>
  )
}

export default SellerProfile

// {/* <div className="main__content">
// <div className="content__cards cards"></div>
// </div> */}
