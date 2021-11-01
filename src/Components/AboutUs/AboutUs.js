import React from 'react';
import img1 from '../../images/banner/banner1.jpg'
import img2 from '../../images/banner/banner2.jpg'
import img3 from '../../images/banner/banner3.jpg'

import { Button, Card} from 'react-bootstrap';
import './AboutUs.css'


const AboutUs = () => {
    return (

        <>

      <h1 class="text-center">Why You Choose Us !</h1> 
        <div id ='about'   className="about-card">
            
             <div className="space">
         
         <Card className="g-4" style={{ width: '100%', }}>
 <Card.Img variant="top" src={img1} />
 <Card.Body>
   <Card.Title>Fast Delivery </Card.Title>
   <Card.Text>
   This includes professionals in medicine, psychology, physiotherapy, nursing, dentistry, midwifery and allied health, along with many others such as public health practitioners
   </Card.Text>
   <Button variant="warning">More Details</Button>
 </Card.Body>
</Card>
       </div >
             <div >
         
         <Card className="g-4" style={{ width: '100%', }}>
 <Card.Img variant="top" src={img2} />
 <Card.Body>
   <Card.Title> Propers Management </Card.Title>
   <Card.Text>
   There are more than 220 public hospitals and health services in NSW which provide free health care to Australian citizens and permanent residents.
   </Card.Text>
   <Button variant="warning">More Details</Button>
 </Card.Body>
</Card>
       </div>
             <div className="space">
         
         <Card className="g-4" style={{ width: '100%', }}>
 <Card.Img variant="top" src={img3} />
 <Card.Body>
   <Card.Title> Friendly Behaviours</Card.Title>
   <Card.Text>
   Services provided at public hospitals may include emergency care, elective and emergency surgery, medical treatment, maternity services, and rehabilitation programs.
   </Card.Text>
   <Button variant="warning">More Details</Button>
 </Card.Body>
</Card>
       </div>
        </div>

        </>
    );
};

export default AboutUs;