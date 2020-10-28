import { promises } from 'fs'
import React, {useState} from 'react'
import Style from './MainSettingItem.module.scss'
import ToggleButton from '../CommonParts/ToggleButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FontAweSome from "@fortawesome/free-regular-svg-icons";


const MainSettingItem = (props: any) => {
  
  const { category, setting_name, instance_name,setting_params, setting_enable } = props.card_item
  const [selected, setSelected ] = useState(setting_enable);
  
  // icon スタイル設定
  const iconStyle: React.CSSProperties = { fontSize: 20 };

  return (
    <div className={Style.MainSettingItem}>
      <div className={Style.MainSettingItem__card}>
        <div className={Style.MainSettingItem__wrapTitleArea}>
          <div className={Style.MainSettingItem__editButton}>
            <FontAwesomeIcon style={iconStyle} icon={FontAweSome.faEdit} />
          </div>
          <h2 className={Style.MainSettingItem__title}>{category}</h2>
          
        </div>
        <div className={Style.MainSettingItem__body}> 
          <div　className={Style.MainSettingItem__itemTitle}>環境名称</div>
          <div　className={Style.MainSettingItem__itemTitle}>インスタンス名称</div>
          <div　className={Style.MainSettingItem__itemTitle}>起動時間</div>
          <div　className={Style.MainSettingItem__itemTitle}>停止時間</div>
          <div　className={Style.MainSettingItem__itemTitle}>設定状況</div>
        </div>
        <div className={Style.MainSettingItem__body}> 
          <div className={Style.MainSettingItem__itemBody}>
            {setting_name}
          </div>
          <div className={Style.MainSettingItem__itemBody}>
            {instance_name}
          </div>
          
          {
            Object.keys(setting_params).map((item,key)=>{
              return (
                <div className={Style.MainSettingItem__itemBody}>
                  {setting_params[item]}
                </div>
              )
            })
          }
          <div　className={Style.MainSettingItem__itemBody}>
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
