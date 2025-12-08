import React from 'react'

export default function GrandParent({propsparent}) {
  return (
    <div>
        <h2>This is Grand Parent components </h2>
        <h2> Company Name is {propsparent} </h2>
        
    </div>
  )
}
