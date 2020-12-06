import React, { useState } from 'react'
import Style from './MainSettingWeekDay.module.scss'

interface IWeekDate {
  [key: string]: boolean
}


const MainSettingWeekDay = ({ week_days }: any) => {
  const weekParams = week_days as IWeekDate;
  console.log(weekParams['monday']);
  const [weekStatus, setWeekStates] = useState(weekParams)
  const [monday, setMonday] = useState(weekParams['monday'])

  const changeDaysStatus = (param: any) => {
    // weekParams['monday'] = true;
    weekStatus[param] = !weekStatus[param];
    console.log(weekStatus)
    const rtnParam = Object.assign([], weekStatus)
    console.log(rtnParam['monday'], "monday")
    setWeekStates(rtnParam);


  }

  return (
    <div className={Style.MSWeel}>
      <div className={Style.MSWeel__Wrap}>
        {/* <div className={Style.MSWeel__day}>月</div> */}
        <div className={weekStatus['monday'] ? Style.MSWeel__trueday : Style.MSWeel__day} onClick={() => changeDaysStatus('monday')}>月</div>
        <div className={weekStatus['tuesday'] ? Style.MSWeel__trueday : Style.MSWeel__day} onClick={() => changeDaysStatus('tuesday')}>火</div>
        <div className={weekStatus['wednesday'] ? Style.MSWeel__trueday : Style.MSWeel__day} onClick={() => changeDaysStatus('wednesday')}>水</div>
        <div className={weekStatus['thursday'] ? Style.MSWeel__trueday : Style.MSWeel__day} onClick={() => changeDaysStatus('thursday')}>木</div>
        <div className={weekStatus['friday'] ? Style.MSWeel__trueday : Style.MSWeel__day} onClick={() => changeDaysStatus('friday')}>金</div>
        <div className={weekStatus['saturday'] ? Style.MSWeel__trueday : Style.MSWeel__day} onClick={() => changeDaysStatus('saturday')}>土</div>
        <div className={weekStatus['sunday'] ? Style.MSWeel__trueday : Style.MSWeel__day} onClick={() => changeDaysStatus('sunday')}>日</div>

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
