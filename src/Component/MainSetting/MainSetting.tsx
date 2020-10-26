import React from 'react'
import { StaticRouter } from 'react-router-dom'
import Style from './MainSetting.module.scss'
import MainSettingItem from '../MainSetting/MainSettingItem'
const setting_items = [
  {
    _id: "1",
    category: "EC2",
    setting_name: "速度検証環境",
    setting_params: {
      uptime: "09:00",
      down_time: "23:00"
    },
    setting_enable: true
  },
  {
    _id: "1",
    category: "EC2",
    setting_name: "速度検証環境",
    setting_params: {
      uptime: "09:00",
      down_time: "23:00"
    },
    setting_enable: false
  },
  {
    _id: "1",
    category: "EC2",
    setting_name: "速度検証環境",
    setting_params: {
      uptime: "09:00",
      down_time: "23:00"
    },
    setting_enable: true
  },

]

const MainSetting = () => {
  return (
    <div className={Style.MainSetting}>
      <div className={Style.MainSetting__Wrap}>
        <h2 className={Style.MainSetting_title}>開発サーバー起動設定</h2>
        <div className={Style.MainSetting__area}>
        {
          setting_items.map((item) => {
            return (
              <MainSettingItem card_item={item}/>
            )
          })
        }
        </div>

      </div>
    </div>
  )
}

export default MainSetting


