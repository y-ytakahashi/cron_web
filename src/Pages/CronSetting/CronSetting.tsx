import React from 'react'
import SideMenu from '../../Component/SideMenu/SideMenu'
import HeaderMenu from '../../Component/Header/HeaderMenu'
import MainSetting from '../../Component/MainSetting/MainSetting'
import Style from './CronSetting.module.scss'
const Cronsetting = () => {
  return (
    <div className={Style.cronSetting}>
      <div className={Style.cronSetting__header}>
        <HeaderMenu />
      </div>
      <div className={Style.cronSetting__wrap}>  
        <div className={Style.cronSetting__side}>
          <SideMenu />
        </div>
        <div className={Style.cronSetting__content}>
          <MainSetting/>
        </div>
      </div>
      <div className={Style.cronSetting__footer}>aaaa</div>
    </div>
  )
}

export default Cronsetting
