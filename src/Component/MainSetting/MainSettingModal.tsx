
// このモーダルは使わない
import React from 'react'
import Style from './MainSettingModal.module.scss'

const MainSettingModal = () => {
  return ( 
    <div className={Style.ModalContents}>
      <div className={Style.ModalLeftNav}>
        
        <span className={Style.ModalSample}>Navigateion Setting</span>
      </div>
      <div>
        <div>Setting Area</div>
        
        <div>
          <ul>
            <li>環境名称</li>
            <li><input type="text"/></li>
          </ul>
        </div>

        <div>
          <ul>
            <li>インスタンス名称</li>
            <li><input type="text"/></li>
          </ul>
        </div>

        <div>
          <ul>
            <li>起動時間</li>
            <li><input type="text"/></li>
            <li>停止時間</li>
            <li><input type="text"/></li>
          </ul>
        </div>

        <div>
          <ul>
            <li>カレンダー</li>
            <li><input type="text"/></li>
          </ul>
        </div>
        
      </div>
    </div>
    

  )
}

export default MainSettingModal
