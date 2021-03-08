import React from 'react'
import './style.css'
function NavMenu() {
    return (
        <div className="navMenu">
            <img src="/assets/img/logo.png" alt="logo" />
            <ul>
                <li><a href="#">Anasayfa</a></li>
                <li><a href="#">Popüler Bloglar</a></li>
                <li><a href="#">Galeri</a></li>
                <li><a href="#">Bize Yazın</a></li>
            </ul>
        </div>
    )
}

export default NavMenu
