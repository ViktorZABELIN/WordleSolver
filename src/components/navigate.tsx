import { Link } from "react-router-dom";

export function Navigate(){
    return <ul>
        <li> 
            <Link to="/" >Главная</Link>
        </li>
        <li> 
            <Link to="/wordle" >Решатель</Link>
        </li>
        <li> 
            <Link to="/hints" >Подсказки</Link>
        </li>
    </ul>
}