import { promises } from 'fs'
import React from 'react'
import Style from './MainSettingItem.module.scss'

const MainSettingItem = (props: any) => {
  console.log(props)
  const { category, setting_name, setting_params, setting_enable } = props.card_item
  console.log(setting_params)
  return (
    <div className={Style.MainSettingItem}>
      <div className={Style.MainSettingItem__card}>
        <h2 className={Style.MainSettingItem__title}>{category}</h2>
        <div className={Style.MainSettingItem__body}> 
          <div　className={Style.MainSettingItem__item}>環境名称</div>
          <div　className={Style.MainSettingItem__item}>起動時間</div>
          <div　className={Style.MainSettingItem__item}>停止時間</div>
          <div　className={Style.MainSettingItem__item}>設定状況</div>
        </div>
        <div className={Style.MainSettingItem__body}> 
          <div className={Style.MainSettingItem__item}>
            {setting_name}
          </div>
          
          {
            Object.keys(setting_params).map((item,key)=>{
              return (
                <div className={Style.MainSettingItem__item}>
                  {setting_params[item]}
                </div>
              )
            })
          }
          <div　className={Style.MainSettingItem__item}>{setting_enable}</div>
        </div>
      </div>

    </div>
  )
}

export default MainSettingItem
