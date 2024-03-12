import "./header.css"
import Button from "../button/button";

export default function Header(){

    function handleOpenLogin(){
    }

    return(
        <>
            <div className="header">
                <h1 className="header__title">Фильмы</h1>
                <Button buttonName={"Войти"} onClick={handleOpenLogin}></Button>
            </div>
        </>
    )
}