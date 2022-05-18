import React, {useState, useEffect } from 'react'
import "./App.css"
import Fruit from './Fruit';

const FirstData = () => {

    const[data1 , setData] = useState([]);
    const[loading , setLoading] = useState(true);

    const  fetchAPI = async () =>{
        try{
            let product = await fetch("http://3.131.5.153:4000/api/product/product-list");
            setLoading(false);
       // console.log(product);
        let listed =await product.json();
         setData( listed.data.products);
        // console.log(product.json());
        }catch(error){
            setLoading(false);
          console.log(error)
        }
    }

    useEffect(() =>{
        fetchAPI();
    },[])

    if(loading){
        return <Fruit />
    }
  return (
    <>

    {
        data1.map((list)=>{
            //console.log(list);
            return(
        <div className='first' key={list.product_id}>
        <div className='second'>
            <img src={list.product_image} alt='Product' />
            <div className='category-list'>
                <div className='title'>{list.product_name}</div>
                <div className='rating'>
                    <span className='rate'>8.9 </span><span> {list.product_basic_unit}</span>
                </div>
                <div className='price'>
                    <span className='price-data'>${list.product_price*90/100}</span>                    
                    <span className='discount'> <s>${list.product_price}</s></span>
                    <span className='off'> 10% off</span>
                </div>
            </div>
         </div>
    </div>
            ) 
        })
    }

    {/* <div className='first'>
        <div className='second'>
            <img src='' alt='Product' />
            <div className='category-list'>
                <div className='title'>Title</div>
                <div className='rate'>
                    <span className='rate'>Rate</span><span>Unit</span>
                </div>
                <div className='price'>
                    <span className='price-data'>Price</span>                    
                    <span className='discount'> Discount</span>
                    <span className='off'> 10% off</span>
                </div>
            </div>
        </div>
    </div> */}
    </>
  )
}

export default FirstData;