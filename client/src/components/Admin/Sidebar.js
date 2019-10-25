import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

const Sidebar = props => {
    switch(props.page){
        case "orders":
            return(
                <ul className="sidebar">
                <li><Link to="/orders">View All Orders</Link></li>
                <li>View By Recipe</li>
                </ul>
            );
        case "manage":
            return(
                <ul className="sidebar">
                <li><Link to="/ingredients">Manage Ingredients</Link></li>
                <li>Manage Recipes</li>
                <li>Manage Menu</li>
                </ul>
            );
        default:
            return(
                <ul className="sidebar">
                 <li>Manage Orders</li>
                 <li>Menu item 2</li>
                 <p>-----</p>
                 <li>Manage Ingredients</li>
                 <li>Manage Recipes</li>
                 <li>Manage Menu</li>
                 <p>-----</p>
                 <li>Logout</li>
                </ul>
            )
    }
}

Sidebar.propTypes = {

}

export default Sidebar
