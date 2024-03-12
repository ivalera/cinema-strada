import { useState } from 'react';
import LoginDialog from "./authorization/login-dialog";
import SignUpDialog from "./authorization/signup-dialog";

function ModalDialog(){
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    const [signInDialogOpen, setSignInDialogOpen] = useState(false);

    return (
        <>
            <LoginDialog isOpenDialog={loginDialogOpen} titleText={'Авторизация'} buttonName={'Войти'}/>
            <SignUpDialog isOpenDialog={signInDialogOpen}  titleText={'Регистрация'} buttonName={'Зарегестрироваться'}/>
        </>
    );
}

export default ModalDialog;