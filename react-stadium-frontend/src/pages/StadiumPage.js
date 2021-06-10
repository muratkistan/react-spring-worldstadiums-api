
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCountryDetails } from "../api/apiCalls";
import defaultPicture from "../assets/ttarena.png";

const StadiumPage = () => {
  const [countries, setCountries] = useState([]);
  const { id } = useParams();
  let imageSource = defaultPicture;

  const stadiumDetails = useSelector((state) => state.page.content); //Burdan devam et izle
  const stadium = stadiumDetails.filter((s) => s.id == id)[0];

  if (stadium.image) {
    imageSource = stadium.image;
  }

  useEffect(() => {
    
    getCountryDetails()
      .then((response) => setCountries(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("Countries ; ", countries);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-9">
          <div className="card mb-3">
              <div className="card-header">
              <h4 className="card-title text-center ">{stadium.name}</h4>
              </div>
           
            <img src={imageSource} className="card-img-top shadow" alt="..." />
          </div>
        </div>
        <div className="col-3">
          <div className="card border-dark text-center ">
            <div className="card-header">
              <h4>Details</h4>
            </div>
            <div className="card-body text-dark">
              <h3 className="card-title">{stadium.name}</h3>
              <h4 className="card-text">Capacity : {stadium.capacity}</h4>
              <h4 className="card-text">{stadium.city}</h4>

              {countries.map((country) => {
                if (country.name === stadium.country) {
                  return (
                    <div className=" mt-2 text-center">
                      <h4>{country.name}</h4>
                     
                    
                      <p>
                        {
                          <img
                            src={country.flag}
                            alt={country.name}
                            style={{ width: "100px" }}
                          />
                        }
                      </p>
                    </div>
                  );
                }
              })}<br></br>
              <p className="card-text">{stadium.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StadiumPage;
