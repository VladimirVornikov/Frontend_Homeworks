import React from 'react'
import style from './Slide4.module.css'

export default function Slide4({text, color}) {
  return (
    <div className={style.block} style={{backgroundColor: color}}>
        <hr className={style.upper_text} />
        <p className={style.info_text}>{text}</p>
    </div>
  )
}
