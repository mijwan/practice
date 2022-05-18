import React,{useEffect,useState} from 'react'


const App = () => {
 
  const [data , setData] = useState([]);
 useEffect (() =>{
   fetch("https://fakestoreapi.com/products").then((resp) =>{
        resp.json().then((result) =>{
       // console.log(result);
          setData(result);
        })
   })
 },[])

  return (
    <>    
    <div className='header'>
      <h1 style={{textAlign:"center"}}>Get method</h1>
      <table border="2">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((items) =>{
            <tr>
              <td>{items.id}</td>
              <td>{items.title}</td>
              <td>{items.price}</td>
              <td>{items.description}</td>
              <td>{items.image}</td>
            </tr>
           console.log(items)
          })
        }
        </tbody>
      </table>
    </div>
    </>
  )
  }

export default App;

