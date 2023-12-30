import { Link, useParams } from 'react-router-dom'
import MainMenu from '../../components/MainMenu/MainMenu'
import * as S from './SellerProfile.styled'
import AdsComponent from '../../components/AdItem/AdItem'
import {
  useGetAdsQuery,
  useLazyGetAllUsersQuery,
} from '../../store/Service/serviceQuery'
import { useEffect, useState } from 'react'
import { formatDate } from '../../utils/formatDate'

const SellerProfile = () => {
  const { id } = useParams()
  const [currentUser, setCurrentUser] = useState('')
  const [userAds, setUserAds] = useState()
  const { data: allAds } = useGetAdsQuery()
  const [fetchAllUsers, { data }] = useLazyGetAllUsersQuery()

  useEffect(() => {
    data?.forEach((el) => {
      if (el.id === Number(id)) {
        setCurrentUser(el)
      }
    })
  }, [data])

  useEffect(() => {
    fetchAllUsers()
  }, [id])

  useEffect(() => {
    if (allAds) {
      const ads = []
      for (let i = 0; i < allAds.length; i++) {
        if (allAds[i].user_id === Number(id)) {
          ads.push()
        }
      }
      setUserAds(ads)
    }
  }, [allAds])

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
                    <S.SellerImgImg
                      src={`http://127.0.0.1:8090/${currentUser?.avatar}`}
                      alt=""
                    />
                  </Link>
                </S.SellerImg>
              </S.SellerLeft>
              <S.SellerRight>
                <S.SellerTitle>
                  {`${currentUser?.name ? currentUser?.name : 'user'} ${
                    currentUser?.surname ? currentUser?.surname : ''
                  }`}
                </S.SellerTitle>
                <S.SellerCity>{currentUser?.city}</S.SellerCity>
                <S.SellerCity>
                  Продает товары с {formatDate(currentUser?.sells_from)}
                </S.SellerCity>
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
      <AdsComponent products={userAds} />
    </S.MainContainer>
  )
}

export default SellerProfile
