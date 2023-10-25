import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{width:'100%',height:'300px', background:'black'}}>
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>

        <div className="website" style={{width:'400px',color:'gray'}}>
        <h4 style={{color:'white'}}><i class="fa-solid fa-cloud-arrow-up"></i> Bootstrap</h4>
          Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
          Code licensed MIT, docs CC BY 3.0.
          Currently v5.3.2.
        </div>
        <div className="links d-flex flex-column">
          <h4 style={{color:'white'}}>Links</h4>
         <Link to={'/'}  style={{textDecoration:'none',color:'gray'}}> Home</Link>
          <Link to={'/cart'}  style={{textDecoration:'none',color:'gray'}}>Cart</Link>
          <Link to={'/wishlist'}  style={{textDecoration:'none',color:'gray'}}>Wishlist</Link>
          

        </div>
        <div className="guides d-flex flex-column">
          <h4 style={{color:'white'}}>Guides</h4>
          <Link to={'https://react.dev/'}  style={{textDecoration:'none',color:'gray'}}> React</Link>
          <Link to={'https://react-bootstrap.github.io/'}  style={{textDecoration:'none',color:'gray'}}>React Bootstrap</Link>
          <Link to={'https://reactrouter.com/en/main'}  style={{textDecoration:'none',color:'gray'}}>Routing</Link>
        </div>
        <div className="contact d-flex flex-column flex-wrap">
          <h4 style={{color:'white'}}>Contact Us</h4>
          <div className="d-flex">
            <input
              className="form-control"
              placeholder="Enter Your Mail"
              type="text"
            />
            <div className="btn btn-primary ms-2"><i class="fa-solid fa-arrow-right "></i></div>
          </div>
          <div className="d-flex justify-content-evenly mt-3 fs-5">
            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <i
                className="fa-brands fa-twitter"
                style={{ color: 'gray' }}
              ></i>
            </Link>
            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: 'gray' }}
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: 'gray' }}
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>

            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: 'gray' }}
            >
              
              <i class="fa-brands fa-instagram"></i>
              
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <p className='mt-3'style={{color:"red"}}>Copyright © 2023 E-Cart. Built with React.</p>
    </div>
  );
}


      

    
    
      


export default Footer