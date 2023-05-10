import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import SideBarStyles from './Sidebar.module.css'


function SideBar() {
  const [sidebar,setSidebar] = useState({
      SidebarItems:[
        {
          menuName:'Home',
          menuIcon:'asset/Images/home-icon.png',
        },
        {
          menuName:'Pokidex',
          menuIcon:'asset/Images/pokidex-icon.png',
        },
        {
          menuName:'Videogames',
          menuIcon:'asset/Images/Controller-icon.png',
        },
        {
          menuName:'GCC pokemon',
          menuIcon:'asset/Images/poke-cards.png',
        },
        {
          menuName:'TV pokemon',
          menuIcon:'asset/Images/tv-icon.png',
        },
        {
          menuName:'Play Pokemon',
          menuIcon:'asset/Images/trophy-icon.png',
        },
        {
          menuName:'News',
          menuIcon:'asset/Images/poki-news.png',
        },
      ]
  })
  return (
    <div className={SideBarStyles['sideBar']}>
      <div className={SideBarStyles['sideBarInner']}>
        {sidebar.SidebarItems.map((e)=>{
          return <div  className={SideBarStyles['sideBarContent']}>
              <div className={SideBarStyles['sideBarContentWrapper']}>
                <img src={e.menuIcon}  alt={e.menuName} width="30px"/>
                <div  className={SideBarStyles['']}>{e.menuName}</div>
              </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default SideBar
