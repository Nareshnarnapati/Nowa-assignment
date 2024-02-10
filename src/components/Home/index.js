import React from 'react'
import "./index.css"

import Header from '../Navbar'

const Home = () => {
  return (
    <div className="main-con">
      <Header/>  
    <div className="set-flex">
    <div>
    <div className="con-display">
      <div className="layout1"> 
          <div className="rupe-items">
          <div>
          <h1 className="rupe-heading">Total Fee</h1>
          <p>
          <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>10,00,000
          </p>
          </div>
          
          
          <img src="https://i.ibb.co/sVFc8W8/icons8-receive-cash-64.png" alt="icons8-receive-cash-64" className="hand"/>
        
          </div>
          <p className="para">
            Total Students:<span className="spa">750</span>
          </p>
      </div>
      <div className="layout1"> 
          <div className="rupe-items">
          <div>
          <h1 className="rupe-heading">Pending Fee</h1>
          <p className="amount-para">
          <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>4,00,000
          </p>
          </div>
          
          
          <img src="https://i.ibb.co/sVFc8W8/icons8-receive-cash-64.png" alt="icons8-receive-cash-64" className="hand"/>
        
          </div>
          <div className="con-display1">
            <div className="space">
              <h1 className="term-head">Term1</h1>
            <p className="mar-para">
              <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>50,000
          </p>
            </div>
        
            <div className="space">
              <h1 className="term-head">Term2</h1>
              <p className="mar-para">
              <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>3,50,000
          </p>
            </div>
        
            <div className="space">
              <h1 className="term-head">Term3</h1>
              <p className="mar-para">
              <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>0
          </p>
            </div>
        
          </div>
        
      </div>
    </div>
  <div className="layout3">
        <div className="rupe-items">
          <div className="padding-up">
          <h1 className="rupe-heading">Recived Fee</h1>
          <p className="rece-para">
          <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>60,00,000
          </p>
          </div>
          <div className="padding-down">
            <p className="term-head">
              Term1
            </p>
            <p className="term-head">
            Term 2
            </p>
            <p className="term-head">
              Term 3
            </p>
          </div>
          <div>
          <p className="on-para">
            Online
          </p>
          <p>
          <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>3,00,000
          </p>
          <p>
          <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>50,000
          </p>
          <p>
          <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>0
          </p>
          </div>
          <div>
          <p className="off-para">
            Offline
          </p>
          <p>
          <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>0
          </p>
          <p>
          <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>0
          </p>
          <p>
          <img src="https://i.ibb.co/QCzqyvL/icons8-rupee-24.png" alt="icons8-rupee-24" className="rupee"/>0
          </p>
          </div>
          <img src="https://i.ibb.co/sVFc8W8/icons8-receive-cash-64.png" alt="icons8-receive-cash-64" className="hand"/>
        
          </div>
          <div>
            
          </div>
          


  </div>
  </div>
    
  <div>
        <div className="layout2">
          <nav className="notice-nav">
            Noticeboard | Latest
          </nav>
          <div className="para-flex">
            <p> 5days</p>
            <img src="https://i.ibb.co/NCrqWdZ/icons8-vertical-line-80.png" alt="icons8-vertical-line-80"/>
            <p>
              Sports day comensing<br/>
              from <span>15 march 2024</span>
            </p>
          </div>

        </div>
  </div>
  </div>
      
    </div>
  )
}

export default Home
