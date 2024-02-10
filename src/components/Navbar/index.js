import React from 'react'
import "./index.css"

const Header = () => {
  return (
        <nav className="bg-con">
        <div>
            <div >
                <h1 className="heading"> 
                    DASHBOARD
                </h1>
                <p className="sec-head">
                    HOME / DASHBOARD
                </p>

            </div>
        </div>
        <div className="items-change">
        <div className="card-con">
                <div>
                <h1 className="card-head">Branch</h1>
                <p className="card-para">Madhapur-SNVOO1</p>
                </div>
            
                <img src="https://i.ibb.co/k2FCf9G/icons8-down-arrow-26.png" alt="icons8-down-arrow-26" className="arrow-down"/>
            
               
                </div>
            <div className="card-item">
                <p className="para-item">
                    FYI 2023-24
                </p>
                <img src="https://i.ibb.co/k2FCf9G/icons8-down-arrow-26.png" alt="icons8-down-arrow-26" className="arrow-down"/>

            </div>
            <div className="card-item">
                <p className="para-item">
                    Term 1
                </p>
                <img src="https://i.ibb.co/k2FCf9G/icons8-down-arrow-26.png" alt="icons8-down-arrow-26" className="arrow-down"/>

            </div>
            
        </div>
            
            
            
            
        </nav>
      )
}

export default Header
