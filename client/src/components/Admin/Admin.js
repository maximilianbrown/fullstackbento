import React, {Fragment, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types'

import Menu from './Menu'
import Sidebar from './Sidebar'
import IngredientEditor from './IngredientEditor'





const Admin = props => {
    const[page, setPage] = useState("null");

    const changePage = (e)=>{
        setPage(e.target.name)
    }

    return (
        <Router>
        <Fragment>
            <Menu changePage={(e)=>changePage(e)}/>
            <Sidebar page={page}/>
            <div className="admin-content">
                <Switch>
                    <Route exact path = "/ingredients" component={IngredientEditor}/>
                </Switch>
            </div>
        </Fragment>
        </Router>
    )
}

Admin.propTypes = {

}

export default Admin
