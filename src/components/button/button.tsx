import './button.css'
import { MouseEvent } from 'react';

type ButtonProps = {
    buttonName: string;
    onClick: (e: MouseEvent) => void;
}

function Button({buttonName, onClick}: ButtonProps){
    return (
        <button className="button" onClick={onClick}>
            {buttonName}
        </button>  
    )
}

export default Button;