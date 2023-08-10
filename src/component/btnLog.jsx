import { useNavigate } from "react-router-dom"
import { login, logout } from "../actions/log"

export const BtnLog =(user)=>{
    
    user ?(
        <button onClick={asda}>Logout</button>
    ):(
        <button onClick={login}>Login</button>
    )
}