import React from "react";

function RentItems (props){
  return (
    <div className="card">
    <img className="product-image" src={props.img} alt="" />
    <h2>{props.name}</h2>
    <p className="product-price">  ₹ {props.rentPrice}</p>
    <p className="product-desc">{props.desc.substring(0,90)}</p>
  </div>
  );
};


function NewArrivedItems (props){
  return (
    <div className="card">
    <img className="product-image" src={props.img} alt="" />
    <h2>{props.name}</h2>
    <p className="product-price">  ₹ {props.rentPrice}</p>
    <p className="product-desc">{props.desc.substring(0,90)}</p>
  </div>
  );
};

export {RentItems,NewArrivedItems};
