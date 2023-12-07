import FooterMob from '../../components/FooterMob/FooterMob';
import * as S from './Signup.styled';

const Signup = () => {
    return (
        <S.BodySignup>
            <S.Wrapper>
                <S.ContainerSignup>
                    <S.ModalBlock>
                        <S.ModalFormLogin id="formLogIn" action="#">
                            <S.ModalFormLogo>
                                <S.ModalImg src="../img/logo_modal.png" alt="logo" />
                            </S.ModalFormLogo>
                            <S.ModalInputLogin type="text" name="login" id="loginReg" placeholder="email" />
                            <S.ModalInputLogin type="password" name="password" id="passwordFirst" placeholder="Пароль" />
                            <S.ModalInputLogin type="password" name="password" id="passwordSecond" placeholder="Повторите пароль" />
                            <S.ModalInputLogin type="text" name="first-name" id="first-name" placeholder="Имя (необязательно)" />
                            <S.ModalInputLogin type="text" name="first-last" id="first-last" placeholder="Фамилия (необязательно)" />
                            <S.ModalInputLogin type="text" name="city" id="city" placeholder="Город (необязательно)" />
                            <S.ModalBtnsignupEnt id="btnSignUp"><a href="signup.html">Зарегистрироваться</a></S.ModalBtnsignupEnt>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                    <FooterMob />
                </S.ContainerSignup>
            </S.Wrapper>
        </S.BodySignup>
    );
};

export default Signup;