import './Regform.css';
import React from 'react'
import { Component, useState } from 'react';
function REGFORM() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [country, setCountry] = useState("");
    const [course, setCourse] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://webhook.site/4756ae47-00b6-4bc6-a5a4-30f000a164c8", {
            method: "POST",
            body: JSON.stringify({
              name: name,
              email: email,
              mobileNumber: mobileNumber,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setName("");
            setEmail("");
            setMobileNumber("");
            setMessage("User created successfully");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

        return (
          

            <div>
                <div className='main-block'>
                    <div className="left-part">
                        
                        <h1>Register to our courses</h1>
                        <p>Learn some of the most-sought after skills to earn remotely from your home or anywhere in the world</p>
                        <div className="btn-group">
                           
                            <a className="btn-item" href="https://wa.me/message/BQ6RK2XFCTVNF1">Chat With Us</a>
                        </div>
                    </div>
                    <form action="/">
                        <div className="title">
                            
                            <h2>RegisterR here</h2>
                        </div>
                        <div className="info">
                            <input className="fname" type="text" name="Fullname" placeholder="Full name" value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <input type="text" name="Email" placeholder="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" name="Phonenumber" placeholder="Phone number" value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)} />
                            <input type="text" name="Country" placeholder="Country" value={country}
                                onChange={(e) => setCountry(e.target.value)} />
                                

                        </div>
                        
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>

                </div>
            </div> 
            
        )
        
    }
    export default REGFORM;