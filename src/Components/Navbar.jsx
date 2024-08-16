import React from 'react'
import logo from '../media/logo.png'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
                <p>PicProwl</p>
                <p>Bhavika</p>
                <p>Changes 1</p>
                <p>Changes 2</p>
                <p>Changes 3</p>
                <p>Changes 4</p>
            </div>
            <div className="icons">
                <div className="icon"><i class="fa-solid fa-bell"></i></div>
                <div className="icon"><i class="fa-solid fa-comment-dots"></i></div>
                <div className="icon"><i class="fa-solid fa-user"></i></div>
            </div>
        </div>
    )
}

export default Navbar
