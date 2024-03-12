import { useState } from 'react';
import './css/authorization-dialog.css'
import Input from '../../input/input';
import Button from '../../button/button';
import { DialogProps } from './types';

function SignUpDialog(props: DialogProps) {
    const { titleText, buttonName, isOpenDialog } = props;
    const [credentials, setCredentials] = useState({
        email: 'email',
        password: 'password'
    });

    function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const targetForm = event.currentTarget;
        targetForm.reset();

        console.log(`
        Пользователь успешно зарегестрирован
        Логин: ${credentials.email}
        Пароль: ${credentials.password}`);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    function handleDialogSignUp(){

    }

    return (
        <dialog open={isOpenDialog ? true : false} className='dialog__authorization'>
            <form 
                className='form__authorization'
                onSubmit={handleSubmitForm}>
                <h3 className='form__title'>{titleText}</h3>
                <Input 
                    name='email'
                    type='email'
                    placeholder={'почта'}
                    onChange={handleChange}/>
                <Input 
                    name='password'
                    type={'password'} 
                    placeholder={'пароль'}
                    onChange={handleChange}/>
                <br/>
                <Button buttonName={buttonName} onClick={handleDialogSignUp}/>
            </form>
        </dialog>
    )
}

export default SignUpDialog;