import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Booking.css'

const Booking = () => {
    const {serviceId}=useParams();
    const [service, setService]=useState({})
    useEffect(()=>{
        fetch(`https://gory-nightmare-59210.herokuapp.com/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <>
       
        <div className="card">
        
         <Card className="" style={{ width: '100%', }}>
 <Card.Img variant="top" id="single-img" src={service.img} />
 <Card.Body>
   <Card.Title>{service.name}</Card.Title>
 
   <Card.Text>
     {service.details}
   </Card.Text>
   <NavLink to={`/service/${service._id}`} className="button">Purchase Now</NavLink>
 </Card.Body>
</Card>
       </div>
      </>
    );
};

export default Booking;