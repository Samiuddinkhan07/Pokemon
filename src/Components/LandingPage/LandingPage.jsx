import React from 'react';
import HeaderStyles from  './LandingPage.module.css'
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../SideBar/SideBar';


function LandingPage() {
    return (
    <div className="MainLandingPage">
        <div className="LandingPageHedaer">
            <Header></Header>
        </div>
        <section className={HeaderStyles["PageBody"]}>
            <div  className="PokiSidebar">
            <Sidebar></Sidebar>
            </div>
            <div className="PageInnerBody">
            <Outlet></Outlet>
        </div>
        </section>
    </div>
    )
}

export default LandingPage
