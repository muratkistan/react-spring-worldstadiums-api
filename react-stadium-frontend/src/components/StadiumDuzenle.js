import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import StadiumFormu from './StadiumFormu';
const StadiumDuzenle = () => {

    const {id} = useParams();
    const stadiumDetays = useSelector(state => state.page.content);//Burdan devam et izle 
    const form =  stadiumDetays.filter(s=> s.id == id)[0];

    


    return (
        <div className="text-center">
            <h1>Stadium Edit Form</h1>
            

            <StadiumFormu form={form}/>
        </div>
    );
};

export default StadiumDuzenle;