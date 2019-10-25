import React, {Fragment} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Basic from './Basic/Basic';
import Admin from './Admin/Admin';

const Index = props => {
    return (
        <Fragment>
            {props.user.user&&props.user.user.authentication.level==="admin"?<Admin/>:<Basic/>}
        </Fragment>
    )
}

Index.propTypes = {

}

const mapStateToProps = state =>({
    user:state.auth
})

export default connect(mapStateToProps)(Index);
