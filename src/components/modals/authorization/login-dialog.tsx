import './css/authorization-dialog.css'
import { useState } from 'react';
import Input from '../../input/input';
import Button from '../../button/button';
import { DialogProps } from './types';

function LoginDialog(props: DialogProps) {
    const { titleText, buttonName, isOpenDialog } = props;
    const [credentials, setCredentials] = useState({
        login: 'login',
        password: 'password'
    });

    function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const targetForm = event.currentTarget;
        targetForm.reset();

        console.log(`
        Пользователь успешно авторизован
        Логин: ${credentials.login}
        Пароль: ${credentials.password}`);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    function handleDialogLogin(){
        
    }

    return (  
        <dialog open={isOpenDialog ? true : false} className='dialog__authorization'>
            <form 
                className='form__authorization' 
                onSubmit={handleSubmitForm}>
                <h3 className='form__title'>{titleText}</h3>
                <Input 
                    name='login'
                    type='name'
                    placeholder={'логин'}
                    onChange={handleChange}/>
                <Input 
                    name='password'
                    type={'password'}
                    placeholder={'пароль'}
                    onChange={handleChange}/>
                <br/>
                <Button buttonName={buttonName} onClick={handleDialogLogin}/>
            </form>
        </dialog>
    )
}

export default LoginDialog;