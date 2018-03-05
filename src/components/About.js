import React, { Component } from 'react';


class About extends Component{
  render(){
    return (
    <div className="prof-box" >
     <img alt="" src={require('../images/profile.jpg')} className="prof-pic"/>
      <h1 className="h1"> Sachin Telalwar</h1>
      <h5> C# developer , react learner </h5>

      <p>
        My passion is to become a full stack developer
      </p>
   </div>
    );
  }
}

export default About;
