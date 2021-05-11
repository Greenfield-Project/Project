import React from 'react'

const STYLE =[
  'btn--primary',
  'btn--outline'
]

const SIZE=[
  'btn--medium',
  'btn--large'
]
export const Button =({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
})=>{
  const checkButtonstyle=STYLE.includes(buttonStyle)? buttonStyle:STYLE[0];
  const checkButtonSize=SIZE.includes(buttonSize) ? buttonSize : SIZE[0]

return (
  <button className={`btn ${checkButtonstyle} ${checkButtonSize}`} onClick={onClick}
  type={type} >{children}</button>
)

}