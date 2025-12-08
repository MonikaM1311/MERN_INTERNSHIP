import React from 'react' 
import GrandParent from './GrandParent'
export default function GrandChild({propsgrand}) {
  return (
    <div>
    <h2>This is Grand Child components </h2>
    <h2> Company Name is {propsgrand} </h2>
    <GrandParent propsparent={propsgrand}/>
    </div>
  )
}
