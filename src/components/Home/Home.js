import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
import img1 from "../../assets/Images/petrol.jpg"
import img2 from "../../assets/Images/street.jpg"
import img3 from "../../assets/Images/street2.jpg"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <>
    
      <div className='main-div '>
       
    
    
      <Carousel   data-bs-theme="light" controls={false}  data-bs-ride="false">
      <Carousel.Item >

        <img
          className="home-img"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='home-h1'>
          Illuminate your space with style and efficiency
          </h1>
          
          <p className='home-p'>We believe in the power of brands to create credibility. That’s why we partner with the best to bring you top-quality products. Trust us to deliver excellence, every time. Shop with confidence, knowing you’re getting the best.</p>
          <button className='home-btn'>Learn More about Project</button>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="home-img"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className='home-h1'>
          Illuminate your space with style and efficiency
          </h1>
          
          <p className='home-p'>We believe in the power of brands to create credibility. That’s why we partner with the best to bring you top-quality products. Trust us to deliver excellence, every time. Shop with confidence, knowing you’re getting the best.</p>
          <button className='home-btn'>Learn More about Project</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="home-img"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='home-h1'>
          Illuminate your space with style and efficiency
          </h1>
          
          <p className='home-p'>We believe in the power of brands to create credibility. That’s why we partner with the best to bring you top-quality products. Trust us to deliver excellence, every time. Shop with confidence, knowing you’re getting the best.</p>
          <button className='home-btn'>Learn More about Project</button>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    <div className="home-cards">
       <div className='home-card1'>
       <Card >
      <Card.Img  src={img1} />
      <h1 className='home-card-h1'>Illuminate your space</h1>
      <label className='home-card-label'>Learn More</label>
      <svg className='home-card-svg' xmlns="http://www.w3.org/2000/svg" width="110" height="8" viewBox="0 0 110 8" fill="none">
<path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM109.354 4.35355C109.549 4.15829 109.549 3.84171 109.354 3.64645L106.172 0.464466C105.976 0.269204 105.66 0.269204 105.464 0.464466C105.269 0.659728 105.269 0.976311 105.464 1.17157L108.293 4L105.464 6.82843C105.269 7.02369 105.269 7.34027 105.464 7.53553C105.66 7.7308 105.976 7.7308 106.172 7.53553L109.354 4.35355ZM1 4.5H109V3.5H1V4.5Z" fill="#FCAF17"/>
</svg>
    </Card>
        </div> 
        <div className='home-card1'>
        <Card >
      <Card.Img  src={img2} />
      <h1 className='home-card-h1'>Illuminate your space</h1>
      <label className='home-card-label'>Learn More</label>
      <svg className='home-card-svg' xmlns="http://www.w3.org/2000/svg" width="110" height="8" viewBox="0 0 110 8" fill="none">
<path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM109.354 4.35355C109.549 4.15829 109.549 3.84171 109.354 3.64645L106.172 0.464466C105.976 0.269204 105.66 0.269204 105.464 0.464466C105.269 0.659728 105.269 0.976311 105.464 1.17157L108.293 4L105.464 6.82843C105.269 7.02369 105.269 7.34027 105.464 7.53553C105.66 7.7308 105.976 7.7308 106.172 7.53553L109.354 4.35355ZM1 4.5H109V3.5H1V4.5Z" fill="#FCAF17"/>
</svg>
    </Card>
        </div>
        <div className='home-card1'>
        <Card >
      <Card.Img  src={img3} />
      <h1 className='home-card-h1'>Illuminate your space</h1>
      <label className='home-card-label'>Learn More</label>
      <svg className='home-card-svg' xmlns="http://www.w3.org/2000/svg" width="110" height="8" viewBox="0 0 110 8" fill="none">
<path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM109.354 4.35355C109.549 4.15829 109.549 3.84171 109.354 3.64645L106.172 0.464466C105.976 0.269204 105.66 0.269204 105.464 0.464466C105.269 0.659728 105.269 0.976311 105.464 1.17157L108.293 4L105.464 6.82843C105.269 7.02369 105.269 7.34027 105.464 7.53553C105.66 7.7308 105.976 7.7308 106.172 7.53553L109.354 4.35355ZM1 4.5H109V3.5H1V4.5Z" fill="#FCAF17"/>
</svg>
    </Card>
        </div>
        
        </div>


    <div className='home-form'>
        <form className="d-flex form">
        <input className="form-control " type="search" placeholder="Search a Product...|" aria-label="Search"
        />
        <svg className='home-form-search' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8086 16.8633C19.0547 17.1367 19.0547 17.5469 18.7812 17.793L18.0156 18.5586C17.7695 18.832 17.3594 18.832 17.0859 18.5586L14.3789 15.8516C14.2422 15.7148 14.1875 15.5508 14.1875 15.3867V14.9219C13.2031 15.6875 12 16.125 10.6875 16.125C7.54297 16.125 5 13.582 5 10.4375C5 7.32031 7.54297 4.75 10.6875 4.75C13.8047 4.75 16.375 7.32031 16.375 10.4375C16.375 11.7773 15.9102 12.9805 15.1719 13.9375H15.6094C15.7734 13.9375 15.9375 14.0195 16.0742 14.1289L18.8086 16.8633ZM10.6875 13.9375C12.6016 13.9375 14.1875 12.3789 14.1875 10.4375C14.1875 8.52344 12.6016 6.9375 10.6875 6.9375C8.74609 6.9375 7.1875 8.52344 7.1875 10.4375C7.1875 12.3789 8.74609 13.9375 10.6875 13.9375Z" fill="#E2E2E2"/>
</svg>
      </form>
        </div>
      </div>



    </>
  )
}





export default Home