import React from 'react'
import "./App.css";

const LandingPage = () => {
  return (
    <>
    <div className='container-fluid home-page'>
        <div className='row'>
            <div className='col-lg-6 landing-page'>
            <h1>We deliver all kind of grocery in reliable cost which is best for you.</h1>
            </div>
            <div className='col-lg-5 '>
            <img class="img-fluid " src="assets/images/home/banner-img.png" alt="banner img"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage