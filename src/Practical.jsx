import React, { useEffect, useState } from 'react'
import "./App.css"



const Practical = () => {

    const [data , setData] = useState([]);
   
    const fetchData = async () =>{
        let repo = await fetch("https://fakestoreapi.com/products");
       // console.log(repo);
        setData(await repo.json());
    }

    useEffect(() =>{
       fetchData();
    },[])

  return (
    <>
         {
          data.map((items) =>{
              return(
                <div className='cards'>
                <div className='card'>
                <div className='content-area'>
                <img src={items.image} alt="myPic" className="card_img" />
                <div className="card_info">
                <span className="card_category">{items.category}</span>
                   <h2 className="card_title">${items.price}</h2>
                    <button>Add Card</button>
                  </div>
                  </div>                                                                         
            </div>
        </div>
                  
              )
          })
      }
    </>
  )
}

export default Practical;
