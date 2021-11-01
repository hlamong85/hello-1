import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SingleDeliveryMan = (props) => {
    const{name, details, img, _id, price }=props.deliver
    return (
        <>
       
        <div className="space">
        
         <Card className="g-4" style={{ width: '100%', }}>
 <Card.Img variant="top" src={img} />
 <Card.Body>
   <Card.Title>{name}</Card.Title>
   <p>Price:{price}</p>
 
   <Card.Text>
     {details}
   </Card.Text>
   <NavLink to={`/service/${_id}`} className="button">Purchase Now</NavLink>
 </Card.Body>
</Card>
       </div>
      </>
    );
};

export default SingleDeliveryMan;