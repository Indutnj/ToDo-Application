import {useState} from 'react';
export default function TextComponent(props)
//js way
//let city="Chennai"; 
//city="Coimbatore";
{
    let [city,setCity]=useState("Chennai");// returns [variableName, callback

    function changeCity1(){
        //when state change rerender occers
        setCity("Coimbatore");
       // city="Coimbatore";
    }
   
    function changeCity2(){
        //render not occers
        city="Coimbatore";
        console.log(city);
    }
  
    return (
    <div className="h1">
        {props.firstName} {props.lastName} is of age {props.age} comes from {city}
        <button onClick={changeCity1}>Change City 1</button>
        <button onClick={changeCity2}>Change City 2</button>
        </div>
    );
}