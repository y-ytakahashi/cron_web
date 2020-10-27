import { promises } from 'fs'
import React, {useState} from 'react'
import Style from './MainSettingItem.module.scss'
import ToggleButton from '../CommonParts/ToggleButton'

const MainSettingItem = (props: any) => {
  
  const { category, setting_name, setting_params, setting_enable } = props.card_item
  const [selected, setSelected ] = useState(setting_enable);
  return (
    <div className={Style.MainSettingItem}>
      <div className={Style.MainSettingItem__card}>
        <div className={Style.MainSettingItem__wrapTitleArea}>
          <div className={Style.MainSettingItem__editButton}>
            Edit Setting
          </div>
          <h2 className={Style.MainSettingItem__title}>{category}</h2>
          
        </div>
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
          <div　className={Style.MainSettingItem__item}>
            <ToggleButton 
              selected={selected}
              toggleSelected={()=>{setSelected(!selected)}}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default MainSettingItem
