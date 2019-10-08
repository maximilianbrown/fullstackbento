import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {logout} from '../../actions/auth'

const Navbar = props => {
    return (
        <nav className="navbar bg-dark">
            {!props.isAuth?(
                <ul>
                    <li><button name="auth" disabled={props.toggling} onClick={(e)=>props.toggleAuth(e)}>Login/Register</button></li>
                    <li>About</li>
                </ul>
            ):(
                <ul>
                    <li><button onClick={()=>props.logout()}>Logout</button></li>
                    <li><button>Profile</button></li>
                    <li>About</li>
                </ul>
            )}
            <h1>Bumblebee Bentos</h1>
            <ul>
                <li>Store</li>
                <li><button>Cart</button></li>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    isAuth:PropTypes.bool.isRequired
}

const mapStateToProps = state =>({
    isAuth: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{logout})(Navbar)

