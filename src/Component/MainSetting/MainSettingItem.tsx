import { promises } from 'fs'
import React, { useState, useRef } from 'react'
import Modal from 'react-modal'
import Style from './MainSettingItem.module.scss'
import ToggleButton from '../CommonParts/ToggleButton'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FontAweSome from "@fortawesome/free-regular-svg-icons";
import MainSettingWeekDay from './MainSettingWeekDay';
import MainSettingModal from './MainSettingModal'

const MainSettingItem = (props: any) => {

  const { category, setting_name, instance_name, setting_params, week_days, setting_enable } = props.card_item

  const [selected, setSelected] = useState(setting_enable);

  // 入力フォームの初期値を宣言
  interface initialStateType {
    [inputName: string] :string,
  }
  const initialState = {
    inputName: setting_name, 
    inputInstanceName: instance_name,
    up_time:setting_params.up_time,
    down_time:setting_params.down_time
  } as initialStateType

  const [formValue, setFormValue] = useState(initialState);

  // form edit 
  const [edit, setEdit] = useState(true)
  // forcus
  const inputRef = useRef<HTMLInputElement>(null);
  
  // EditButton
  const editButtonClick= (type:string) => {
    switch(type){
      case 'edit':
        return setEdit(!edit)

      case "cancel":
        return setFormValue(initialState)
        
      case 'save':
        return null
        

      
    }
    
    console.log({type})
    setEdit(!edit)
  }



  //  入力フォームから state に値を代入する
  const formEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const target = e.target;
    const name = target.name;
    console.log(formValue)
    setFormValue(() => {
      return { ...formValue, [name]: target.value }
    })
  }

  return (
    <div className={Style.MainSettingItem}>
      <div className={Style.MainSettingItem__card}>
        <div className={Style.MainSettingItem__wrapTitleArea}>
          <h2 className={Style.MainSettingItem__title}>{category}</h2>
          <div className={Style.MainSettingItem__wrappButtonArea}>
            <div className={Style.MainSettingItem__editButton} 
              onClick={()=>{editButtonClick("edit")}}>Edit

            </div>
            <div className={Style.MainSettingItem__cancelButton} onClick={()=>{editButtonClick("cancel")}}>Cancel</div>
            <div className={Style.MainSettingItem__saveButton}>Save</div>
          </div>


        </div>
        <div className={Style.MainSettingItem__body}>
          <div className={Style.MainSettingItem__itemTitle}>環境名称</div>
          <div className={Style.MainSettingItem__itemTitle}>インスタンス名称</div>
          <div className={Style.MainSettingItem__itemTitle}>起動時間</div>
          <div className={Style.MainSettingItem__itemTitle}>停止時間</div>
          <div className={Style.MainSettingItem__itemTitle}>カレンダー</div>
          <div className={Style.MainSettingItem__itemTitle}>設定状況</div>
        </div>
        <div className={Style.MainSettingItem__body}>
          <div className={Style.MainSettingItem__itemBody}>
            <input ref={inputRef} type="text" value={formValue['inputName']} name="inputName" disabled={edit} onChange={(e) => {formEventHandler(e)}
            }/>
          </div>
          <div className={Style.MainSettingItem__itemBody}>
            <input type="text" value={formValue['inputInstanceName']} name="inputInstanceName" disabled={edit} onChange={e => formEventHandler(e)} />
          </div>

          {
            Object.keys(setting_params).map((item, index) => {              
              return (
                <div className={Style.MainSettingItem__itemBody} key={index}>
                  <input type="text" name={item} value={formValue[item]} onChange={e => formEventHandler(e)} disabled={edit}/>
                </div>
              )
            })
          }
          <div className={Style.MainSettingItem__itemBody}>
            <MainSettingWeekDay week_days={week_days} />

          </div>
          <div className={Style.MainSettingItem__itemBody}>
            <ToggleButton
              selected={selected}
              toggleSelected={() => { setSelected(!selected) }}
            />
          </div>
        </div>
      </div>

    </div>
  )
}
export default MainSettingItem
