import { Link } from 'react-router-dom'
import * as S from './AdItem.styled'
import { formatDateAndTime } from '../../utils/formatDate'

const AdItemUser = ({ adsMe }) => {
  if (!adsMe) {
    return <h2>Ничего не найдено</h2>
  }

  return (
    <>
      {adsMe.map((ad, index) => (
        <Link to={`/ad/${ad.id}`} key={index}>
          <S.CardsItem>
            <S.CardsCard>
              <S.CardsImage>
                {ad.images[0] && ad.images[0].url && (
                  <S.CardsImageImg
                    src={`http://127.0.0.1:8090/${ad.images[0].url}`}
                    alt="picture"
                  />
                )}
              </S.CardsImage>
              <S.CardContent>
                <S.CardTitle>{ad.title}</S.CardTitle>
                <S.CardPrice>{ad.price.toLocaleString('ru-RU')} ₽</S.CardPrice>
                <S.CardPlace>{ad.user.city}</S.CardPlace>
                <S.CardDate>{formatDateAndTime(ad.created_on)}</S.CardDate>
              </S.CardContent>
            </S.CardsCard>
          </S.CardsItem>
        </Link>
      ))}
    </>
  )
}

export default AdItemUser
