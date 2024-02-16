import React from 'react'

function Tags(props) {
  return (
    <span className="flex  justify-center items-center gap-2">
            {props.icon}
            {props.text}
            </span>
  )
}

export default Tags