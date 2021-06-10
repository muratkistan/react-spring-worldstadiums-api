import React from 'react';
import { useDispatch } from 'react-redux';
import { showStadiumByProperty } from '../actions';

const DropDown = (props) => {
    const {stadiums,type} = props;

    const dispatch = useDispatch();



    const onChange = event => {
        const {name,value} = event.target;
         dispatch(showStadiumByProperty(value));
        
    }
    

   


   

    return (
        <div className="mt-3" >
            
             <select class="ui search dropdown" style={{width:200,height:40}} onChange={onChange}>
               
             <option value="">Countries</option>
                 {stadiums.map(stadium =>{
                    const {city,country,team} = stadium;

                    switch (type) {
                        case "country":
                            return(<option name="country" value={stadium.country}>{stadium.country} </option>)
                        case "city":
                            return(<option name="city" value={stadium.city}>{stadium.city} </option>)
                        case "capacity":
                            return(<option  name="capacity" value={stadium.capacity}>{stadium.capacity} </option>)
                            

                    
                        default:
                            break;
                    }

                    
                     
                     
                 })}
                
             </select>
        </div>
    );
};

export default DropDown;