import React from 'react';
import "./Featured.css";
import Card from 'react-bootstrap/Card';
import img4 from '../../assets/Images/Essential-GU10 1.png'

function Featured() {
  return (
    <>
       <div className="Featured">
        <div className="featured-right">
        <div className="featured-heading">
            <h1 className="featured-h1">
            Featured Products
            </h1>
            <p className='featured-p'>Brighten up your space with our featured lighting fixtures! From sleek and modern to classic and elegant, we have the perfect fixture to match your style. Shop now and see the difference good lighting can make!</p>
        </div>
        <div className="featured-label">
            <label  className="featured-lab">View More Featured Product</label>
            <svg className='featured-svg' xmlns="http://www.w3.org/2000/svg" width="164" height="6" viewBox="0 0 164 6" fill="none">
<path d="M0.333496 2.66276C0.149401 2.66276 0.00016278 2.812 0.00016278 2.99609C0.00016278 3.18019 0.149401 3.32943 0.333496 3.32943V2.66276ZM163.236 3.2318C163.366 3.10162 163.366 2.89057 163.236 2.76039L161.115 0.639071C160.984 0.508897 160.773 0.508897 160.643 0.639071C160.513 0.769246 160.513 0.980301 160.643 1.11048L162.529 2.99609L160.643 4.88171C160.513 5.01189 160.513 5.22294 160.643 5.35312C160.773 5.48329 160.984 5.48329 161.115 5.35312L163.236 3.2318ZM0.333496 3.32943H163V2.66276H0.333496V3.32943Z" fill="#FCAF17"/>
</svg>
        </div>

        <div className="featured-item">
            <div className="featured-item1">
                <p className='featured-item-p'>Indoor</p>
            </div>
            <div className="featured-item2">
<p className="featured-item-p2">Outdoor
</p>
            </div>
            <div className="featured-item2">
            <p className="featured-item-p2">Decorative
</p>
            </div>
            <div className="featured-item2">
            <p className="featured-item-p2">Strip & Neon
</p>
            </div>
        </div>


        </div>
        <div className="featured-cards">
      
    <div className="cards">
    <div className="feature-new">
      <div >
      <label  className="featured-new-label">New  </label>
        </div>  
        
        <div><svg className='featured-new-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2 5" fill="none">
<path d="M2.00061 5.00065L0.000610352 0.333984V5.00065H2.00061Z" fill="#393D46"/>
</svg></div>
       </div>
    <Card className='card1'>
      <Card.Img variant="top" className='featured-img' src={img4} />
      <Card.Body>
      <Card.Title className='featured-title'>Essential</Card.Title>
      <p className='featured-price'>AED 85.75 / Piece</p>
        <Card.Text className='featured-text'>
        Please Login/Register to See the Stock Details.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="cards">
    <div className="feature-new">
      <div >
      <label  className="featured-new-label">New  </label>
        </div>  
        
        <div><svg className='featured-new-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2 5" fill="none">
<path d="M2.00061 5.00065L0.000610352 0.333984V5.00065H2.00061Z" fill="#393D46"/>
</svg></div>
       </div>
    <Card className='card1'>
    <Card.Img variant="top" className='featured-img' src={img4} />
      <Card.Body>
      <Card.Title className='featured-title'>Essential</Card.Title>
      <p className='featured-price'>AED 85.75 / Piece</p>
        <Card.Text className='featured-text'>
        Please Login/Register to See the Stock Details.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="cards">
    <div className="feature-new">
      <div >
      <label  className="featured-new-label">New  </label>
        </div>  
        
        <div><svg className='featured-new-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2 5" fill="none">
<path d="M2.00061 5.00065L0.000610352 0.333984V5.00065H2.00061Z" fill="#393D46"/>
</svg></div>
       </div>
    <Card className='card1'>
      <Card.Img variant="top" className='featured-img' src={img4} />
      <Card.Body>
      <Card.Title className='featured-title'>Essential</Card.Title>
      <p className='featured-price'>AED 85.75 / Piece</p>
        <Card.Text className='featured-text'>
        Please Login/Register to See the Stock Details.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="cards">
    <div className="feature-new">
      <div >
      <label  className="featured-new-label">New  </label>
        </div>  
        
        <div><svg className='featured-new-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2 5" fill="none">
<path d="M2.00061 5.00065L0.000610352 0.333984V5.00065H2.00061Z" fill="#393D46"/>
</svg></div>
       </div>
    <Card className='card1'>
      <Card.Img variant="top" className='featured-img' src={img4} />
      <Card.Body>
      <Card.Title className='featured-title'>Essential</Card.Title>
      <p className='featured-price'>AED 85.75 / Piece</p>
        <Card.Text className='featured-text'>
        Please Login/Register to See the Stock Details.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="cards">
    <div className="feature-new">
      <div >
      <label  className="featured-new-label">New  </label>
        </div>  
        
        <div><svg className='featured-new-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2 5" fill="none">
<path d="M2.00061 5.00065L0.000610352 0.333984V5.00065H2.00061Z" fill="#393D46"/>
</svg></div>
       </div>
    <Card className='card1'>
      <Card.Img variant="top" className='featured-img' src={img4} />
      <Card.Body>
      <Card.Title className='featured-title'>Essential</Card.Title>
      <p className='featured-price'>AED 85.75 / Piece</p>
        <Card.Text className='featured-text'>
        Please Login/Register to See the Stock Details.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="cards">
    <div className="feature-new">
      <div >
      <label  className="featured-new-label">New  </label>
        </div>  
        
        <div><svg className='featured-new-svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2 5" fill="none">
<path d="M2.00061 5.00065L0.000610352 0.333984V5.00065H2.00061Z" fill="#393D46"/>
</svg></div>
       </div>
    <Card className='card1'>
      <Card.Img variant="top" className='featured-img' src={img4} />
      <Card.Body>
      <Card.Title className='featured-title'>Essential</Card.Title>
      <p className='featured-price'>AED 85.75 / Piece</p>
        <Card.Text className='featured-text'>
        Please Login/Register to See the Stock Details.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
</div>

        </div> 
    </>
  )
}

export default Featured