import React from 'react'
import NavMenu from '../NavMenu'
import TopNav from '../TopNav'
import './style.css'

function Headers() {
    return (
    <div className="headers">
       <TopNav />
        <NavMenu />
        <div style={{ overflow: 'auto', padding:'10px' }} />
    </div>
    )
}

export default Headers
