import "./input.css"
import { InputProps } from './types'

function Input(props: InputProps){
    const { name, type='text', placeholder, onChange } = props;

    return (
        <input
            className="input"
            name={name}
            type={type}
            placeholder={placeholder}
            required
            onChange={onChange}
        />
    )
}

export default Input;