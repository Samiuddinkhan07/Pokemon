import React from 'react';
import HeaderStyles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
    <div className="Nav-bar">
        <div className={HeaderStyles['navBar']}>
        <div className={HeaderStyles['navbarcontent']}>
            <div className={HeaderStyles['navbarInnerContent']}>
                <Link to='/dashboard'><img src="asset/Images/PokiDex-banner.png" alt="" width='125px'/></Link>
                <div className={HeaderStyles['RightSideSection']}>
                    <span>About</span>
                    <span>More</span>
                </div>
            </div>
        </div>
        </div>
    </div>
)
}

export default Header
