import React, {useState} from 'react'

const Auth = (props) =>{
    const [inputs,setInput] = useState({
        email:"",
        pass:""
    })

    const {email, pass} = inputs;

    const onChange = (e)=>{
        setInput({...inputs, [e.target.name]:e.target.value})
        console.log("change")
    }

    return (
                <div id="authmenu" className="auth">
                    <button name="auth" disabled={props.toggling} onClick={e=>props.toggleAuth(e)}>x</button>
                    <form>
                        <input type="email" placeholder="Email Adress" value={email} name="email" onChange={e=>onChange(e)}/>
                        <input type="password" placeholder="Password" value={pass} name="pass" onChange={e=>onChange(e)}/>
                        <div className="buttons">
                        <button className="log-btn">Login</button>
                        <button className="reg-btn">Register</button>
                        </div>
                    </form>
                </div>
    )

}

export default Auth
