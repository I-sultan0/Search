import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='menu_style'>
                <NavLink exact activeClassName='active_class' to='/'>About Us</NavLink>
                <NavLink exact activeClassName='active_class' to='/services'>Services</NavLink>
                <NavLink exact activeClassName='active_class' to='/search'>Search</NavLink>
                <NavLink exact activeClassName='active_class' to='/user/Sultan/Akhter'>User</NavLink>
                <NavLink exact activeClassName='active_class' to='/contact'>Contact Us</NavLink>

            </div>
        </>

    )
}

export default Navbar
