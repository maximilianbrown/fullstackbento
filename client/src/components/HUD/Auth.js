import React, {useState, useEffect} from 'react'
import {loggo, reggo} from '../../actions/auth'
import AuthAlert from './AuthAlert'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {setAlert} from '../../actions/alert';

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


    useEffect(()=>{
         console.log("useEffect");
         if(props.isAuth){
             props.toggleAuth();
         }
    },[props.isAuth])
    

    return (
                <div id="authmenu" className="auth">
                    <button className="auth-x-btn" name="auth" disabled={props.toggling} onClick={()=>props.toggleAuth()}>x</button>
                    <AuthAlert/>
                    <form>
                        <input type="email" placeholder="Email Adress" value={email} name="email" onChange={e=>onChange(e)}/>
                        <input type="password" placeholder="Password" value={pass} name="pass" onChange={e=>onChange(e)}/>
                    </form>
                    <div className="buttons">
                        <button className="log-btn" onClick={()=>props.loggo(email, pass)}>Login</button>
                        <button className="reg-btn" onClick={()=>props.reggo(email, pass)}> Register</button>
                        </div>
                </div>

    )
}

Auth.propTypes={
    loggo: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuthenticated,
    alerts: state.alert
})

export default connect(mapStateToProps, {loggo, reggo, setAlert}) (Auth)
