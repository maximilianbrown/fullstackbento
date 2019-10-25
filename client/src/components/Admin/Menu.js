import React from 'react'

const Menu = (props) => {



    return (
        <ul className="admin-menu">
            <li><button name="top" onClick={(e)=>props.changePage(e)}>Admin Top</button></li>
            <li><button name="orders" onClick={(e)=>props.changePage(e)}>Check Orders</button></li>
            <li><button name="manage" onClick={(e)=>props.changePage(e)}>Manage Menus</button></li>
            <li><button>Logout</button></li>
        </ul>
    )
}



export default Menu
