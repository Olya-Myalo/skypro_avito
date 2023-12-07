import * as S from './ListAds.styled'

const ListAds = () => {
    return (
        <S.MainContent>   
            <S.ContentCards>                               
                <S.CardsItem>
                    <S.Card>
                        <S.CardImage>
                            <a href="#" target="_blank">
                                <S.CardImg src="#" alt="picture" />
                            </a>
                        </S.CardImage>
                        <S.CardContent>
                            <S.CardLink href="" target="_blank">
                                <S.CardTitle>Ракетка для большого тенниса Triumph Pro ST</S.CardTitle>
                            </S.CardLink>
                            <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
                            <S.CardPlace>Санкт Петербург</S.CardPlace>
                            <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
                        </S.CardContent>
                    </S.Card>
                </S.CardsItem>
            </S.ContentCards>                        
        </S.MainContent>
    );
};

export default ListAds;