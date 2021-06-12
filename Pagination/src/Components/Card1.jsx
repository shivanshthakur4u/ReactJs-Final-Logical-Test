import React from "react";
import "./Card.css";

const Card =(props)=>{
  return(<>
    <div class="main"> 
  <img class="user-pic" src={props.img}/>
  <div class="contact-box">
    <h4 class="user-name">{props.fname} {props.lname}</h4>
    <ul class="user-contact">
        <li>
       <i class="fa fa-envelope-o"></i>{props.email}
        </li> 
       
    </ul>
  </div>
</div>




    </>);
}
export default Card;
