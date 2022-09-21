import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



const Breadcrumbs = (props) => {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/food">Menu</Breadcrumb.Item>
        <Breadcrumb.Item active>Details</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
  
  export default Breadcrumbs;




