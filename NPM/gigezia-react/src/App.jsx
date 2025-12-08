/* import logo from './assets/react.svg' 
import image from './assets/image8.jpg' */
import Parent from './components/Parent'
import Child from './components/Child'
import Footer from './components/Footer'
import { use } from 'react'
import { useState } from 'react'
function App() {

  /* const [count,setcount]=useState(0) // or const a=useState(0)
  const [color,setcolor]=useState("Red")
  const [isOn,setisOn]=useState(false)
  const [a,setofA]=useState([0,1,2,3]) 

  const [liked,setliked]=useState(0)
  const [disliked,setdisliked]=useState(0) */

  

  /* const [object,setobject]=useState({name:"Gigezia",type:"IT Company"})
   */

  /* const name="Gigezia" */

   // Product Array
  const products = [
    { id: 1, name: "Mobile", price: "₹15000", desc: "Latest Android smartphone" },
    { id: 2, name: "Laptop", price: "₹55000", desc: "High performance laptop" },
    { id: 3, name: "Smart Watch", price: "₹7000", desc: "Fitness tracking & notifications" },
    { id: 4, name: "Headphones", price: "₹3000", desc: "Noise cancellation audio" },
    { id: 5, name: "Keyboard", price: "₹1200", desc: "Wireless soft keys" }
  ];
  
  return (
    <>
      <h1>Hello, Gigezia!</h1>
      {/*<img src={logo}/><br/>
      <img src={image} height={600} width={300}/> <br/>
 
      <button onClick={()=>{setcount(count+1)}}>Click Me for Add </button>
      <button onClick={()=>{setcount(count-1)}}>Click Me for Sub </button>
      <h2> {count} </h2>
      <Parent/>
      <Child/>
      <Footer/>
      */}
      {/* <h2>Color: <span style={{ color: color }}>{color}</span></h2>
      <h1 style={{ backgroundColor: color }}>This is {color} Background</h1>
      <button onClick={()=>{setcolor("Blue")}}>Blue</button>
      <button onClick={()=>{setcolor("Green")}}>Green</button>
      <button onClick={()=>{setcolor("Yellow")}}>Yellow</button>


      <h2>The light is 💡 {isOn ? "On" : "Off"}</h2>
      <button onClick={()=>{setisOn(true)}}>On</button>
      <button onClick={()=>{setisOn(false)}}>Off</button>

      <h2>{isOn ? "ON" : "OFF"}</h2>
      <button onClick={()=>{setisOn(!isOn)}}>Toggle</button>

      <h2>{a}</h2>

      <button onClick={()=> setofA(a.length)}>Array Length</button>
      <button onClick={()=> setofA(a.push(5))}>Add 5</button>

      <h2>{object.name} is an {object.type}</h2>
      <button onClick={()=> setobject({...object,location:"India"})}>Add Location</button>
      <button onClick={()=> setobject({...object, name:"Gigezia Technologies"})}>Change Name</button>

      <h2>Likes 😍 : {liked} <br/> Dislikes 🥱 : {disliked}</h2>
      <button onClick={()=> setliked(liked+1)}>Like</button>
      <button onClick={()=> setdisliked(disliked+1)}>Dislike</button>
 */}
      {/* <h2>This is App Component</h2>
      <h2> Company Name is {name} </h2>
      <Parent propsname={name}/>  {/* passing data from parent to child using props */}


      <div style={{ textAlign: "center" }}>
      
      <h1>Product Details</h1>

      {products.map((p) => (
        <div key={p.id}
          style={{
            border: "2px solid black",
            width: "380px",
            margin: "15px auto",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: "#060505bb",
            textAlign: "left"
          }}
        >
          <p><strong>Product Name:</strong> {p.name}</p>
          <p><strong>Price:</strong> {p.price}</p>
          <p><strong>Description:</strong> {p.desc}</p>
        </div>
      ))}

    </div>

    </>
  )
}

export default App
