import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Banner from './Layout/Banner';
import HUD from '../HUD/HUD';

const Basic = props => {
    return (
        <Fragment>
        <HUD/>
        <Banner/>
        <div className="container bg-yelo">
        <h1 className="test">
          hello
        </h1>
        </div>
      </Fragment>
    )
}

Basic.propTypes = {

}

export default Basic
