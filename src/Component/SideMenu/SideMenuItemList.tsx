import React, { FC } from 'react'
import { idText, isTemplateExpression } from 'typescript'


const SideMenuItemList = (props:any) => {
  // console.log(props.menu_list.menuName)
  let {menuName, path} = props.menu_list
  return (
    <div>
      <a href={path}>{menuName}</a>
    </div>
  )
}

export default SideMenuItemList
