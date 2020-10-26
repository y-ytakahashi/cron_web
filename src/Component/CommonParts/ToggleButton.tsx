import React from 'react'
import Style from './ToggleButton.module.scss'

const ToggleButton = (props: any) => {
  const { selected, toggleSelected} = props
  return (
    <div className={Style.toggle_container} onClick={toggleSelected}>
      <div className={selected ?  Style.dialog_button : Style.dialog_button__left}>      
          {selected ? "YES" : "NO"}
      </div>

    </div>
    

  )
}

export default ToggleButton
