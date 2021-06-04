import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import './UserList.css';
import myWonderfulImage from "./images.png";
import myWonderfulphoto from "./userslist.png";

const UserList = () => {
const [listOfUser, setListOfUser] = useState([]);
const [error, setError] = useState(null);
useEffect(() => {
    
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setListOfUser(res.data))
        .catch(err => setError(err));
    
  }, []);
  return (
    <div className="MonApp" >
        <h2  className= "listtitle"> <img  style={{width:80 ,height:80 ,borderRadius:100,marginLeft:'20px' }} src={myWonderfulphoto} alt ='userslist'/> Users's List : </h2>
        <div className="sousapp" >
        {listOfUser.map(user=> (
           <div >
 
            <Card  className="mb-2">
               <Card.Header className="card_header" > <h4 > User of id n:{user.id}<img  style={{width:50 ,height:50 ,borderRadius:100,marginLeft:'20px' }} src={myWonderfulImage} alt ='images'/></h4> </Card.Header>
               <Card.Body style={{ backgroundColor:"aqua" }}>
               <Card.Title style={{ color:"blue" }} > <h5 > Name : {user.name} </h5> </Card.Title>
               <Card.Title style={{ color:"blue" }} > <h5 > Username : {user.username} </h5> </Card.Title>
                <Card.Text>
                     <p > <span > Email </span> : {user.email} </p>
                     <p> <span > Address </span> : 
                      {user.address.street}, {''} 
                      {user.address.suite}, {''}  
                      {user.address.city} {''}
                      {user.address.zipcode} , {''} 
                      {user.address.geo.lat}, {''}
                      {user.address.geo.lng}
                     </p>
                     <p > <span > Phone </span> : {user.phone}</p>
                     <p > <span > Website </span> : {user.website}</p>
                     <p > <span > Company </span> :
                      {user.company.name} : <br/>
                      {user.company.catchPhrase}, <br/>
                      {user.company.bs}
                      </p>
                </Card.Text>
                </Card.Body>
            </Card>

        </div>
         
        ))}      
      </div>   
    </div>
  );
}
export default UserList;