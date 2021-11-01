import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';

import SingleDeliveryMan from '../SingleDeliveryMan/SingleDeliveryMan';
import './DeliveryMan.css'

const DeliveryMan = () => {
    const {delivers}=useAuth();
    console.log(delivers)
    return (
      
         
     <>
     <h1>Our Services</h1>
        <div className="deliver" id="service">
           
           {
               delivers.map(deliver=><SingleDeliveryMan 
               key={deliver.id}
               deliver={deliver}
               
               ></SingleDeliveryMan>)
           }
       </div>
     </>
      
    );
};

export default DeliveryMan;