import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
function Navbar(props) {
  return (
    <div className="main container grid-container">
     <div className='icon  grid-item'>
<i className="fa-brands fa-reddit fa-5x"></i></div>
     <div className='searchbar'><input type="search" name="search" id="search" placeholder="Search what you want" /></div>
     <div className='cart grid-item'><a href="#"><i class="fa-solid fa-cart-shopping fa-3x"></i> Cart</a></div>
     <div className='grid-item'><a href="#">Login</a></div>
     <div className='grid-item  '><a href="#" className='home'>Home</a></div>
     <div className='grid-item'><a href="#">Book A Repair</a></div>
     <div className=' grid-item'><a href="#">Buy Acessories</a></div>
     <div className=' grid-item'><a href="#">Screen Protection</a></div>
     <div className=' grid-item'><a href="#">About Us</a></div>
     <div className=' grid-item'><a href="#">Blog</a></div>
    


    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
