import React from 'react'
import Style from './MainSettingWeekDay.module.scss'

const MainSettingWeekDay = () => {
  return (
    <div className={Style.MSWeel}>
      <div className={Style.MSWeel__Wrap}>        
        <div className={Style.MSWeel__day}>月</div>
        <div className={Style.MSWeel__day}>火</div>
        <div className={Style.MSWeel__day}>水</div>
        <div className={Style.MSWeel__day}>木</div>
        <div className={Style.MSWeel__day}>金</div>
        <div className={Style.MSWeel__day}>土</div>
        <div className={Style.MSWeel__day}>日</div>

      </div>
    </div>
    // <div className={Style.MSWeel}>
    //   {/* <div className={Style.MSWeekWrap}>
    //     カレンダーモジュールやでー
    //   </div> */}
    // </div>
  )
}

export default MainSettingWeekDay
