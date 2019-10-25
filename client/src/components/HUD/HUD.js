import React, {Fragment, useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import Auth from './Auth';
import Navbar from './Navbar';
import BannerAlert from './BannerAlert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const HUD = (props) => {
    const[display, setDisplay] = useState({
        auth:false,
        cart:false
    })

    const[toggling, toggletoggle] = useState(false);

    const {auth, cart} = display;



    // const toggleCart = (e) => {

    // };

   const toggleAuth = (e) => {
        toggletoggle(!toggling);
    };

    useEffect(()=>{
        console.log("toggle effect running")
        if(toggling){
            if(!auth){
                //if !auth toggle auth
                setDisplay({...display, auth:!auth});
            }else{
                //if auth toggle css and then toggle auth after delay
                document.getElementById("overlay").classList.toggle("hide");
                document.getElementById("authmenu").classList.toggle("hide");
                document.getElementById("authmenu").classList.toggle("swipe-up");
                setTimeout(()=>setDisplay({...display, auth:!auth}),300);
            }
            //reset toggling
            setTimeout(()=>toggletoggle(!toggling),300);
        }
    },[toggling])


    return (
        <Fragment>
        {auth&&<div id="overlay" className="overlay"></div>}
        <div className="HUD">
        <Navbar toggling={toggling} toggleAuth={()=>toggleAuth()}/>
        {props.userstatus.user&&!props.userstatus.user.authentication.verified&&<BannerAlert/>}
        </div>

        {auth&&<Auth toggling={toggling} toggleAuth={(e)=>toggleAuth(e)}/>}        
        </Fragment>
    )
}

HUD.propTypes={
    userstatus: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    userstatus: state.auth
})

export default connect(mapStateToProps)(HUD)
