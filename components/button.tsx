import React from 'react'

function Button({
  text,
  secondaryText,
  color = "#070707"
}: {
   text: string; 
   secondaryText?: string; 
   color?: string; 
  }) {
  return (
    <div style={{
        backgroundColor: color,
      }}
      className="flex items-center gap-2 py-1 px-3 text-sm font-medium text-white rounded-lg max-w-fit"
    >
      <span>{ text }</span>
      { secondaryText && <span className="font-light text-neutral-300">{secondaryText}</span> }
    </div>
  )
}

export default Button;