import React from 'react'
import './style.css'
function NavMenu() {
    return (
      
        <div className="navMenu">
      
      { /*
            <div className="topNav">
            <p><i className="fas fa-phone-alt"></i> +90 555 555  55 55</p>
            <ul>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i className="fab fa-google"></i></a></li>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            </ul>
            </div>  */}
            <div className="topNav2">
            <img src="/assets/img/logo.png" alt="logo" />

            <img src="/assets/img/gif/1.gif" />
            <ul>
                <li><a href="#">Anasayfa</a></li>
                <li><a href="#">Ofis e Ne Lazım ? </a></li>
                <li><a href="#">Teknoloji</a></li>
                <li><a href="#">Hobi</a></li>
                <li><a href="#">İletişim</a></li>
            </ul>
            </div>
        </div>
        
    )
}

export default NavMenu
