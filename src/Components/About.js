import React, { useEffect, useState } from 'react'

function About({ data }) {
   const [name, setName] = useState('');
   const [profilepic, setProfilepic] = useState('');
   const [bio, setBio] = useState('');
   const [street, setStreet] = useState('');
   const [city, setCity] = useState('');
   const [state, setState] = useState('');
   const [zip, setZip] = useState('');
   const [email, setEmail] = useState('');
   const [resumeDownload, setResumeDownload] = useState('');
   const [phone, setPhone] = useState('')

   useEffect(() => {
      if (data) {
         setName(data.name);
         setProfilepic(`images/${data.image}`);
         setBio(data.bio);
         setStreet(data.address.street);
         setCity(data.address.city);
         setState(data.address.state);
         setZip(data.address.zip);
         setPhone(data.phone);
         setEmail(data.email);
         setResumeDownload(data.resumedownload);
      }
   }, [data]);

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={profilepic} alt="Nitin Sijwali Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{street}<br />
                           {city} {state}, {zip}
                        </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>

      </section>
   )
}

export default About;