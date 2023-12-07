import FooterMob from '../../components/FooterMob/FooterMob';
import * as S from './Signin.styled';

const Signin = () => {
    return (
        <S.BodyLogin>
            <S.Wrapper>
                <S.ContainerEnter>
                    <S.ModalBlock>
                        <S.ModalFormLogin id="formLogIn" action="#">
                            <S.ModalFormLogo>
                                <S.ModalImg src="../img/logo_modal.png" alt="logo" />
                            </S.ModalFormLogo>
                            <S.ModalInputLogin type="text" name="login" id="formlogin" placeholder="email" />
                            <S.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
                            <S.ModalBtnEnter id="btnEnter"><a href="../index.html">Войти</a></S.ModalBtnEnter>
                            <S.ModalBtnSignup id="btnSignUp"><a href="signup.html">Зарегистрироваться</a></S.ModalBtnSignup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                    <FooterMob />
                </S.ContainerEnter>
            </S.Wrapper>
        </S.BodyLogin>
    );
};

export default Signin;