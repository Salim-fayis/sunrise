import React from 'react';
import "./About.css";
import img5 from "../../assets/Images/image 5.png"
import img6 from "../../assets/Images/image 3.png"
import img7 from "../../assets/Images/image 2.png"
import img8 from "../../assets/Images/imgae1.png"
import img9 from "../../assets/Images/Rectangle 145.png"

function About() {
  return (
    <>
    <div className="About">
        <div className="about-us">
            <div className="about-us-image">
               <div className="about-img1">
                <img style={{height:"15rem"}} src={img5} alt="" />
               </div>
               <div className="about-img2">
                <img style={{height:"25rem"}} src={img8} alt="" />
               </div>
            </div>
            <div className="about-us-image">
               <div className="about-img1">
                <img style={{height:"25rem"}} src={img6} alt="" />
               </div>
               <div className="about-img2">
                <img style={{height:"15rem"}} src={img7} alt="" />
               </div>
            </div>

            <div className="about-us-heading">
                <h1 className='about-h1'>About US</h1>
                <p className="about-p">Tecnolight is one of the world’s largest online retailer of modern and contemporary lighting and furnishings, as well as a popular destination for modern design fans. Tecnolight has spent years establishing itself as the leading online and offline supplier of high-end designer products with a fresh and contemporary appearance. Tecnolight’s range of over 18,000 modern lights includes everything from legendary mid-century modern lighting to cutting-edge contemporary lighting for today’s homes.</p>
                <button className='about-btn'>Learn More About US</button>
            </div>
        </div>
    </div>

    <div className="about-last-img">
        <img style={{width:"90rem"}} src={img9} alt="" />
    </div>

    <div className="lets-talk">
                    <div className="lets-talk-heading">
                        <h1 className='lets-talk-h1'>
                        Let’s talk about your project.
                        </h1>
                    </div>
                    <div className="lets-talk-button">
                        <button className="lets-button">
                    <label className='lets-label'> Ask for Price Quotation</label>   
                        </button>
                    </div>
                </div>
    </>
  )
}

export default About