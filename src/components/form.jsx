import React from "react";
import "./form.style.css";


const Form = props => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
         <h1 class="col">Weather App</h1>
          <div className="col-md-3 offset-md-2">
          <select  name="city"   id="city"   className="form-control" >
          <option value="">Select Cities </option> 
            <option value="Bangalore">Bangalore</option> 
            <option value="Mangalore">Mangalore</option> 
            <option value="Ahmedabad">Ahmedabad</option> 
            <option value="Chennai">Chennai</option> 
            <option value="Kolkata">Kolkata</option> 
            <option value="Surat">Surat</option> 
            <option value="Pune">Pune</option> 
            <option value="Jaipur">Jaipur</option> 

             <option value="Kanpur">Kanpur</option> 
            <option value="Lucknow">Lucknow</option> 
            <option value="Visakhapatnam">Visakhapatnam</option> 
            <option value="Thane">Thane</option> 
            <option value="Bhopal">Bhopal</option> 
            <option value="Agra">Agra</option> 
            <option value="Srinagar">Srinagar</option> 
            <option value="Shimla">Shimla</option> 


             <option value="Hyderabad">Hyderabad</option> 
            <option value="Davanagere">Davanagere</option> 
            <option value="Bellary">Bellary</option> 
            <option value="Pondicherry">Pondicherry</option> 
            <option value="Amaravati">Amaravati</option> 
            <option value="Udupi">Udupi</option> 



        </select> 
       </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Select City ...!
    </div>
  );
};




export default Form;
