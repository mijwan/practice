import React,{useState , useEffect} from 'react'
import axios from 'axios';


const Practice1 = () => {

const[num , setNum] = useState()
const[title , setTitle] = useState();
const [category , setCat] = useState();
const [price , setPri] = useState();

useEffect(() =>{
   // alert("hi");
   async function getData(){
       const resp = await axios.get(`https://fakestoreapi.com/products/${num}`);
      // console.log(resp.id)
    setTitle(resp.title);
    setCat(resp.category);
    setPri(resp.price)
   }
   getData();
})

  return (
    <>

    <h1>This is value of select {num}</h1>
    <h1>This is value of select {title}</h1>
    <h1>This is value of select {category}</h1>
    <h1>This is value of select {price}</h1>

   <label>Choose Option: </label>
    <select value={num} onChange={(event) =>{
         setNum(event.target.value)
    }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </>
  )
}

export default Practice1