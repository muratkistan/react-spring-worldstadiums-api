import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import defaultPicture from "../assets/ttarena.png";
import { showStadiumByProperty, stadiumGetir } from "../actions";
import { useHistory } from "react-router";
import SilModal from "../components/SilModal";
import DropDown from "../components/DropDown";

const StadiumList = (props) => {
  const page = useSelector((state) => state.page);
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { push } = useHistory();
  let imageSource = defaultPicture;

  const { content: stadiums, last, first } = page;

  



  useEffect(() => {
    if (country) {
      dispatch(showStadiumByProperty(country));
    }
    dispatch(stadiumGetir());
    
  }, [country]);

  const onClickNext = () => {
    const nextPage = page.number + 1;
    dispatch(stadiumGetir(nextPage));
  };
  const onClickPrevious = () => {
    const previousPage = page.number - 1;
    dispatch(stadiumGetir(previousPage));
  };

 

 

  return (
    <div className="container">
       <h3 className="card-header text-center p-3 mb-2 bg-secondary text-warning  ">
          STADIUMS
        </h3>
      <div className="row">
          <div className="col-2 mt-4 ">
          <div class="ui category search mb-3">
            <div className="ui icon input">
              <input className="prompt mt-3" type="text" placeholder="Write stadium name..."/>
              <i className="search icon mt-3"></i>
            </div>
            <div className="results"></div>
          </div>
            <h4 className="text-center">List</h4>
            <DropDown stadiums={stadiums} type ="country" />
          
            
            
          </div>
          <div className="col-10 mt-4">
          <div className="card">
       
        

        <div className="list-group-flush">
          <table className=" ui selectable inverted table text-center text-warning">
            <thead>
              <tr >
                <th>Image</th>
                <th>Stadium Name</th>
                <th>Team</th>
                <th>Capacity</th>
                <th>Country</th>
                <th>City</th>
                <th>Opening Date</th>
                <th>Edit</th>
              </tr>
              
            </thead>
            <tbody>
              {stadiums.map((stadium) => {
                if (stadium.image) {
                  imageSource = stadium.image;
                }
                return (
                  <tr key={stadium.id}>
                    <td>
                      <img
                      style={{ cursor: "pointer" }}
                        onClick={() => push(`/stadiumpage/${stadium.id}`)}
                        className="rounded-circle"
                        width="150"
                        height="150"
                        alt={`${stadium.name} profile`}
                        src={imageSource}
                      />
                      <p  style={{ cursor: "pointer" }} onClick={() => push(`/stadiumpage/${stadium.id}`)} >Click here to go to details</p>
                    </td>
                    <td>{stadium.name}</td>
                    <td>{stadium.team}</td>
                    <td>{stadium.capacity}</td>
                    <td>{stadium.country}</td>
                    <td>{stadium.city}</td>
                    <td>{stadium.openingDate}</td>
                    <td>
                     
                      <Button.Group vertical>
                        <Button
                          onClick={() => push(`/update/${stadium.id}`)}
                          inverted
                          color="yellow"
                        ><Icon  name='edit' />
                          Update
                        </Button>
                        <SilModal stadium={stadium} />
                      </Button.Group>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="float-left">
        {first === false && (
          <button
            className="btn btn-sm btn-primary  "
            onClick={onClickPrevious}
          >
            Previous
          </button>
        )}
      </div>
      <div className="float-right">
        {last === false && (
          <button className="btn btn-sm btn-primary   " onClick={onClickNext}>
            Next
          </button>
        )}
      </div>
          </div>
      </div>
      
     
    </div>
  );
};

export default StadiumList;
