import React from 'react'
import Style from './SideMenu.module.scss'

import SideMenuItemList from './SideMenuItemList'

const menu_list = [
  {
    menuName: '開発サーバー',
    path:'/aws'
  },
  {
    menuName: 'バッチ実行',
    path:'/aws'
  },
  {
    menuName: '環境設定',
    path:'/aws'
  },
  {
    menuName: '通知設定',
    path:'/aws'
  },

]

const SideMenu = () => {
  return (
    <div className={Style.sideWrap}>
      {
         <div className={Style.sideWrap__item}>
           {
             menu_list.map((item) => {
               return (
                <SideMenuItemList menu_list={item}/>
               )
             })
            
           }
           
         </div>
        
      }
        
      
      
    </div>
  )
}

export default SideMenu
