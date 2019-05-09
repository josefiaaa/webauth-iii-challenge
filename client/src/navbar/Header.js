import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';

class NavBar extends React.Component {

    logOut = props => {
        localStorage.removeItem("jwt");
        props.history.push("/login");
    };
    
    render () {
        return (
            <section className='nav-bar'>
            
                <div className='navbar'>
                    
                    <NavLink to='/sign-up' className='sign'>Sign Up</NavLink>

                    <NavLink to='/login' className='sign'>Login</NavLink>

                    <NavLink to='/login' className='sign' onClick={this.logOut} >Log Out</NavLink>

                </div>
            </section>
        )   
    }

}

export default NavBar;