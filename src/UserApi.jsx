import React, { useState, useEffect } from 'react'

const UserApi = () => {
    
    const[value , setValue] = useState([]);

   const Getdata = async () =>{
        let response = await fetch("https://fakestoreapi.com/products");
       //console.log(response)
        setValue(await response.json());       
    }

    useEffect(() =>{
        Getdata();
    },[])

  return (
    <>
    <div className='main-body' style={{backgroundColor: "#ccc"}}>
    <h1>List of GitHub Users</h1>
    <div className='container-fluid mt-5'>
        <div className='row'>

          {
              value.map((items) =>{
                  return(
                    <div className='col-10 col-md-4 mt-5'>
                    <div className='card p-2'>
                        <div className='d-flex align-items-center'>
    
                            <div className='image'><img src={items.image} className='rounded' style={{width:"100px"}} /></div>
                            <div className='ml-3 w-100'>
                                <h4 className='mb-0 mt-0 textLeft'>{items.title}</h4><span className='textLeft'>{items.price}</span>
                                <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                    <div className='d-flex flex-column'><span className='articles'>Articles</span><span className='number1'>38</span></div>
    
                                    <div className='d-flex flex-column'><span className='followers'>Followers</span><span className='number2'>{items.rating.count}</span></div>
                                    
                                    <div className='d-flex flex-column'><span className='rating'>Rating</span><span className='number3'>{items.rating.rate}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  )
              })
          }


            {/* <div className='col-10 col-md-4 mt-5'>
                <div className='card p-2'>
                    <div className='d-flex align-items-center'>

                        <div className='image'><img src='' className='rounded' style={{width:"155px"}} /></div>
                        <div className='ml-3 w-100'>
                            <h4 className='mb-0 mt-0 textLeft'>Thapa</h4><span className='textLeft'>Web Developer</span>
                            <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                <div className='d-flex flex-column'><span className='articles'>Articles</span><span className='number1'>38</span></div>

                                <div className='d-flex flex-column'><span className='followers'>Followers</span><span className='number2'>980</span></div>
                                
                                <div className='d-flex flex-column'><span className='rating'>Rating</span><span className='number3'>9.5</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</div>
    </>
  )
}

export default UserApi