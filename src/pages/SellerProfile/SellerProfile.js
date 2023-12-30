import { useParams } from 'react-router-dom'
import MainMenu from '../../components/MainMenu/MainMenu'
import * as S from './SellerProfile.styled'
import {
  useGetAdsQuery,
  useLazyGetAllUsersQuery,
} from '../../store/Service/serviceQuery'
import { useEffect, useState } from 'react'
import { formatDate } from '../../utils/formatDate'
import AdItem from '../../components/AdItem/AdItem'
import { Back } from '../../components/Back'
import { PhoneVisibility } from '../../components/PhoneVisibility'

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
        if (allAds[i].user.id === Number(id)) {
          ads.push(allAds[i])
        }
      }
      setUserAds(ads)
    }
  }, [allAds])

  return (
    <S.MainContainer>
      <S.MainCenterBlock>
        <MainMenu />
        <Back />
        <S.MainH2>Профиль продавца</S.MainH2>
        <S.MainProfileSell>
          <S.ProfileSellContent>
            <S.ProfileSell>
              <S.SellerLeft>
                <S.SellerImg>
                  <S.SellerImgImg
                    src={`http://127.0.0.1:8090/${currentUser?.avatar}`}
                    alt=""
                  />
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
                    <S.SellerImgMobImg
                      src={`http://127.0.0.1:8090/${currentUser?.avatar}`}
                      alt=""
                    />
                  </S.SellerImgMob>
                </S.SellerImgMobBlock>
                <PhoneVisibility data={allAds[0]} />
              </S.SellerRight>
            </S.ProfileSell>
          </S.ProfileSellContent>
        </S.MainProfileSell>
        <S.MainTitle>Товары продавца</S.MainTitle>

        <S.MainContent>
          <S.ContentCards>
            <AdItem products={userAds} />
          </S.ContentCards>
        </S.MainContent>
      </S.MainCenterBlock>
    </S.MainContainer>
  )
}

export default SellerProfile
