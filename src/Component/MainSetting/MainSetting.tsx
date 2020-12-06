import React, { SetStateAction, useEffect, useState } from 'react'
import Style from './MainSetting.module.scss'
import MainSettingItem from '../MainSetting/MainSettingItem'
import { axiosBase, resSettings } from '../../Api/MainSettings'




interface initialStateType {
  [name: string]: [string],
}

interface settinsItems {
  _id: string,
  category: string,
  setting_name: string,
  instance_name: string,
  setting_params: {
    up_time: string,
    down_time: string,
  },
  week_days: {
    monday: boolean,
    tuesday: boolean,
    wednesday: boolean,
    friday: boolean,
    saturday: boolean,
    sunday: boolean,
  },

}

const MainSetting = () => {
  const [settings, setSettings] = useState([]);

  const fetchSettings = async () => {
    const res = await resSettings();
    console.log({ res })
    setSettings(res);
    return res
  }
 
  useEffect(() => {
    fetchSettings();


  }, [])

  console.log({ settings })
  return (
    <div className={Style.MainSetting}>
      <h2 className={Style.MainSetting_title}>開発サーバー起動設定</h2>
      <div className={Style.MainSetting__Wrap}>

        <div className={Style.MainSetting__area}>
          {
            settings.map((item, index) => {
              console.log(item)
              return (
                <MainSettingItem key={index} card_item={item} />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default MainSetting


