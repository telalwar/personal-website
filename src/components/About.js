import React, { Component } from 'react';
import Education from './Education';

class About extends Component{
  render(){
    return (
    <div className="prof-box" >
     <img alt="" src={require('../images/profile.jpg')} className="prof-pic"/>
      <h1 className="h1"> Sachin Telalwar</h1>
      <h5> Software Engineer at Street Diligence, Inc. </h5>

      <div className="line-break"/>

      <p>
      I am Computer Science graduate from The George Washington University with over 4 years of experience and working as a Software Engineer.
      Skilled in C#, Java, react, sql server.

      </p>

      <Education />
   </div>
    );
  }
}

export default About;
