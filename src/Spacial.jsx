import React, { useEffect, useState } from 'react'

const Spacial = () => {

    const[data1 , setData1] = useState([]);
    const dataGet = async () =>{
      let response1 = await fetch("http://3.131.5.153:4000/api/product/product-list");
     // console.log(response1.json())
      let dt = await response1.json();
      setData1(dt.data.products);
      
    }

    useEffect(() =>{
        dataGet();
    },[])
  return (
    <>
    	<section className="home-products py-4">
			<div className="container">
				<div className="row no-gutters justify-content-between">
					<div className="col-9">
						<div className="main-heading text-left">
							<h3 className=""> Recommended For You </h3>
						</div>
					</div>
					<div className="col-3 text-right">
						<a href="#" className="btn  px-lg-4 btn-outline-info btn-lg round-xl round">View All</a>
					</div>
				</div>  
			</div>
			<div className="  bg-items">
				<div className="row">
					{/* <div className="col-12">
						<div className="js-products-slider">
						  
							<div className="product-item">  
								<div className="box">  
									<figure className="img-holder">
										<img className="img-fluid " src="assets/images/home/product.png" alt="product img"/> 
									</figure>
					
									<div className="caption ">
										<a href="product-details.php" className="h6 font-weight-normal">cidacos chikpeas extra 
											<span className="small d-block">570 gr</span>
										</a>
									
										<p className="text-light-blue h5  text-capitalize">$ 2.0 / kg</p>
										
									</div> 	
													 
								</div>  
							</div>
                        </div>
                    </div> */}
                    {
                       data1.map((set) =>{
                        console.log(set)
                           return(
                            <div className="col-12">
						<div className="js-products-slider">
						  
							<div className="product-item">  
								<div className="box">  
									<figure className="img-holder">
										<img className="img-fluid " src={set.product_image} alt="product img"/> 
									</figure>
					
									<div className="caption ">
										<a href="product-details.php" className="h6 font-weight-normal">{set.product_description} 
											<span className="small d-block">{set.product_stock}</span>
										</a>
									
										<p className="text-light-blue h5  text-capitalize">$ {set.product_price} / kg</p>										
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


export default Spacial;