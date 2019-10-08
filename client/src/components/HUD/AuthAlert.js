import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const AuthAlert = ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key={alert.id} className={`alert-auth alert-${alert.alertType}`}>
        {alert.msg}
    </div>
));


AuthAlert.propTypes = {
    alerts: PropTypes.array.isRequired
}


const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(AuthAlert);
