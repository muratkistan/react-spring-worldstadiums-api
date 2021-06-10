import React from 'react';
import defaultPicture from '../assets/ttarena.png';

const ProfileImageWithDefault = (props) => {
    const { image ,tempimage } = props;
    let imagesource = defaultPicture;
    if(image){
        imagesource ='images/' + image;
    }
    return (
      <img alt ={`Profile`} src ={tempimage || imagesource} {...props}/>
    );
};

export default ProfileImageWithDefault;