import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ManageServices.css'

const ManageServices = () => {
    const [services, setService]=useState([])
    useEffect(()=>{
        fetch('https://gory-nightmare-59210.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    const handlDelete=id=>{
      const proceed=window.confirm('Are you sure you want to delete?');
      if(proceed){
        const url =`https://gory-nightmare-59210.herokuapp.com/services/${id}`
        fetch(url,{
            method:'Delete'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                alert('Deleted Succesfully')
                const remaining=services.filter(service=>service._id !==id);
            setService(remaining)
            }
        })
      }
    }
    return (
        <>
            <h1>Manage Service</h1>
            <h1>Total Services Avaiable:{services.length}</h1>
          {
              services.map(service=> <div className="spade">
             <Card className="g-4" style={{ width: '100%', }}>
              <Card.Img variant="top"  src={service.img} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <p>Price:{service.price}</p>
              
                <Card.Text>
                  {service.details}
                </Card.Text>
                <NavLink to={`/service/${service._id}`} className="button">Purchase Now</NavLink>
                <Button onClick={()=>handlDelete(service._id)}>Delete</Button>
              </Card.Body>
             </Card>
             
            </div> )
          }
        </>
    );
};

export default ManageServices;





