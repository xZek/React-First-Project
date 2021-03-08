import React from 'react'
import './style.css'
function TopNav() {
    return (
    <div className="topNav">

      <p><i class="fas fa-phone-alt"></i> +90 555 555  55 55</p>
        
      <ul>
          <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
          <li><a href="#"><i class="fab fa-google"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
      </ul>

    </div>
    )
}

export default TopNav
