import React, { useEffect, useState } from 'react'
import "./App.css"

const Vegitable = () => {

    const [data2 , setData2] = useState([]);
    const[count , setcount] = useState(0);
    const[remove , setRemove] = useState(0)

    const vegitable =async () =>{
        let respect = await fetch("http://3.131.5.153:4000/api/product/product-list");
          //console.log(await respect.json())
          let fetchData = await respect.json();
        setData2(fetchData.data.products);
    }

    const CountAdd = () =>{
        setcount(count + 1);
    }
    const RemoveData = () =>{
        //alert("this is work")
        setRemove(count - 1)
    }


    useEffect(() =>{
        vegitable();
    },[])
  return (
    <>
    <section className="home-products py-4">
			<div className="container-fluid">
				<div className="row no-gutters justify-content-between">
					<div className="col-9">
						<div className="main-heading text-left">
							<h3 className=""> Drinks </h3>
						</div>
					</div>
					<div className="col-3 text-right">
						<a href="#" className="btn  px-lg-4 btn-outline-info btn-lg round-xl round">View All</a>
					</div>
                    {
                        data2.map((item1) =>{
                         return(
                            <div className='col-10 col-md-4 mt-5'>
                            <div className='card p-2'>
                                <div className='d-flex align-items-center'>
            
                                    <div className='image'><img src={item1.product_image} className='rounded' style={{width:"100px"}} /></div>
                                    <div className='ml-3 w-100'>
                                        <h4 className='mb-0 mt-0 textLeft'>{item1.product_name}</h4><span className='textLeft'>$ {item1.product_price}</span>
                                        <div className='p-2 mt-2  d-flex justify-content-between rounded text-white stats'>
                                            
                                            <div className='d-flex card-body'>
                                                <span className='remove' onClick={RemoveData}>-</span>
                                                <span className='number3'>Add Card {count}</span>
                                                <span className='add' onClick={CountAdd}> + </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         )
                        })
                    }
                    
				</div>  
            </div>
        </section>
    </>
  )
}

export default Vegitable;