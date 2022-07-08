import React from 'react'

export default function Historyitem(props) {
  return (
    <div>
        <div className='history'>
            <span>{props.history}</span><span>-$20</span>
        </div>
    </div>
  )
}
