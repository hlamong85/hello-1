import React from 'react';
import './ContactUs.css'
import img from '../../images/banner/banner3.jpg'

const ContactUs = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <img id="img" src={img} alt="" />
                </div>
                <div className="col-md-6">
                <div class="contain">
 <form action="">
 <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"/>
 </form>
</div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;