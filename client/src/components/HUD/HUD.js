import React, {Fragment, useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import Auth from './Auth';

const HUD = () => {
    const[display, setDisplay] = useState({
        auth:false,
        cart:false
    })

    const[toggling, toggletoggle] = useState(false);

    const {auth, cart} = display;



    const toggleCart = (e) => {

    };

    const toggleAuth = (e) => {
        toggletoggle(!toggling);
    }

    useEffect(()=>{
        console.log("toggle effect running")
        if(toggling){
            console.log("toggling is true, checking auth")
            //everything goes in here
            if(!auth){
                console.log("auth is false, toggling auth to true")
                //if !auth toggle auth
                setDisplay({...display, auth:!auth});
            }else{
                console.log("auth is true, toggle auth to false with delay")
                //if auth toggle css and then toggle auth after delay
                document.getElementById("overlay").classList.toggle("hide");
                document.getElementById("authmenu").classList.toggle("hide");
                document.getElementById("authmenu").classList.toggle("swipe-up");
                setTimeout(()=>setDisplay({...display, auth:!auth}),300);
            }
            console.log("toggling toggle with timeout - is this overriding auth statechange?")
            setTimeout(()=>toggletoggle(!toggling),300);
        }
        console.log("toggle effect terminating")
    },[toggling])

    // useEffect(()=>{
    //     console.log("auth effect running. auth is " + auth)
    //     if(auth){
    //         console.log("auth effect")
    //         document.getElementById("overlay").classList.toggle("hide");
    //         document.getElementById("authmenu").classList.toggle("hide");
    //         document.getElementById("authmenu").classList.toggle("swipe-up");
    //     }
    //     console.log(auth)
    // },[auth])



    return (
        <Fragment>
        {auth&&<div id="overlay" className="overlay"></div>}
        <nav className="navbar bg-dark">
            <ul>
                <li><button name="auth" disabled={toggling} onClick={(e)=>toggleAuth(e)}>Login/Register</button></li>
                <li>About</li>
            </ul>
            <h1>Lol</h1>
            <ul>
                <li>Store</li>
                <li><button>Cart</button></li>
            </ul>
        </nav>

        {auth&&<Auth delayTime={5} toggling={toggling} toggleAuth={(e)=>toggleAuth(e)}/>}        
        
        </Fragment>
    )
}

export default HUD
