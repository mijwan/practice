import React, {useState, useEffect } from 'react';
import "./App.css"

const Header = () => {

    const[value , setData] = useState([]);
    const getHeader = async () =>{
        let response = await fetch("http://3.131.5.153:4000/api/product/category-list");
		//console.log(await(response).json());
		let ftdata = await(response).json();
        setData(ftdata.data.categories);
		//console.log(response);
    }


useEffect(() =>{
    getHeader();
},[])

  return (
   <>
   <header id="header" className="site-header minus"> 
		<nav className="navbar row no-gutters justify-content-end align-items-center navbar-expand-lg">
			<div className="col-md-4 col-5">
				<a className="navbar-brand " href="index.html">
					<img className="img-fluid" src="assets/images/logo.png" alt="logo" />
				</a>
			</div>
			<div className="col-md-4 order-md-3 col-7 text-right d-flex align-self-center justify-content-end">
				<ul className=" nav align-items-center ml-auto nav-btns"> 
					<li className="nav-item dropdown">
						<a className="nav-link btn-violet round round-xl" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i className="fas fa-user d-inline-block d-sm-none"></i>	<span className="d-sm-inline-block d-none">My Account</span> <i className="ti-angle-down ml-2"></i>
						</a>
					 
					</li>
					<li className="nav-item">
						<a className="nav-link btn-violet round round-xl" href="#signupModal" data-toggle="modal" ><i className="fas fa-user"></i> </a>
					</li> 
					<li className="nav-item">
						<a className="nav-link" ><i className="fas fa-2x fa-shopping-bag"></i> </a>
					</li> 
					<li className="nav-item">
						<a className="nav-link" ><i className="far fa-2x fa-bell"></i> <span className="badge">0</span> </a>
					</li> 
				</ul>
			</div>
			<div className="col-md-4 order-md-2">
				<form className='form mt-3 mt-md-0' action="">
					<div className="form-group mb-0">
						<div className="input-group	">
							<input type="text" id="" placeholder="Search..." className="form-control  bg-light" required="" /> 
							<div className="input-group-prepend">
								<button type="submit" className="input-group-text"><i className="fa fa-search"></i></button>
							</div>
						</div>
					</div>  
				</form>
			</div>
		</nav>
        <div className="navigations " id="bottom-header">
		  <ul className="js-menu-slider nav">
			{
			 	value.map((items) =>{
					return(
						<div className="navigations " id="bottom-header">
		            <ul className="js-menu-slider nav">
					<li className="nav-item active">
					<a className="nav-link" href="#"><span><i className="icon specials"></i>{items.category_name}</span></a>
				  </li> 
				  </ul> 
				  {/* <span className='badge rounded-pill bg-primary'>{items.category_name}</span> */}
		         </div>  
					) 
				 })				 
			}  
			</ul>
		         </div>       
	</header>
   </>
  )
}

export default Header