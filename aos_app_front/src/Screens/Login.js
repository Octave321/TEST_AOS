import axios from "axios"


export default function Home() {

    function getData(){
        const data = {
            email: "",
            password: ""
        }
        axios.get("http://localhost:3002/login", {params: data}).then(res => {
            console.log(res.data)
        })
    }

    return(
        <div className="login">
            <h2>Login</h2>;
            <input type="email" id="email" placeholder="Email"/>
            <input type="password" id="password" placeholder="Password"/>
            <button id="btnLogin" onClick={getData} >Login</button>
        </div> 
    )
}   