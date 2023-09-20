import React from 'react'

export default function Todolistref(props,ref1) {
  return (
    <div>Todolistref
    <input type='text' ref={ref1}/>
    </div>
  )
}
