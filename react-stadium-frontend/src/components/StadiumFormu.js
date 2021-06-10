import React, { useEffect, useState } from 'react';
import Input from './Input';
import {createStadium} from '../api/apiCalls';
import { Button, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { stadiumDuzenle } from '../actions';
import defaultPicture from '../assets/ttarena.png';


const StadiumFormu = (props) => {

     let imageSource = defaultPicture;

    const [form,setForm] =useState({
      
        image: undefined,
        name:"",
        team:"",
        capacity:"",
        country:"",
        city:"",
        openingDate:"",
        detail:undefined
    });

   

    const [hata ,setHata] = useState('');
    const dispatch = useDispatch();
    const {id} = useParams();
    const {push} =  useHistory();
    // const [newImage , setNewImage] = useState(undefined);

    const onChange = event => {
        const {name,value} = event.target;
        // setForm((previousForm) => ({...previousForm,[name]:value}));
        setForm({...form, [name]:value});
    
    
        
    }

    const onClickSave = (event) => {
        event.preventDefault();
        setHata("");
        if(props.form?.name){
    
            dispatch(stadiumDuzenle(id,form,push));
            push("/");
   
        }else{
            createStadium(form).then(response =>{
                push("/");
            }).catch((error) => {
                console.error(error);
                setHata("Alanlarin doldurulmasi zorunludur");
            });

        }
    }
    const onClickCancel = (event) => {
        event.preventDefault();
        push("/");
    }

    useEffect( () => {
        if( props.form?.name && props.form?.id)
          setForm({
            image: props.form.image,
            name : props.form.name,
            team: props.form.team,
            capacity: props.form.capacity,
            country: props.form.country,
            city: props.form.city,
            openingDate: props.form.openingDate,
            detail: props.form.detail,
            });        
  
      },[props.form]);

      if (form.image) {
        imageSource = form.image;
      }

    const onChangeFile = event => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload =() => {
            //  setNewImage(fileReader.result);
            setForm((previousForm) => ({...previousForm,image :fileReader.result}));
        }
        fileReader.readAsDataURL(file);
    }

    return (
        <div>
            <div className="container ">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 bg-secondary">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                <img className="rounded-circle"  width="200" height="200" alt={`${form.name} profile`}
                                src={form.newImage || imageSource} 
                              />
                              <div className="text-center">
                              <input  type="file" onChange = { onChangeFile}/>

                              </div>
                                <Input name = "name" value = {form.name}  placeholder="Stadium Name" onChange={onChange} />
                                <Input name="team"  value = {form.team}  placeholder="Team" onChange={onChange} />
                                <Input name="capacity"  value = {form.capacity} placeholder="Capacity"  onChange={onChange}/> 
                                <Input name="country" value = {form.country} placeholder="Country" onChange={onChange}/> 
                                <Input name="city"  value = {form.city}  placeholder="City" onChange={onChange} />
                                <Input name="openingDate" value = {form.openingDate}  placeholder="Opening Date" onChange={onChange}/>                                
                                {/* <div class="input-group input-group-lg mt-4">
                                <textarea name="detail" class="form-control" aria-label="With textarea"  value = {form.detail}  placeholder="Detail" onChange={onChange}></textarea>
                                </div> */}

                                <div class="ui form">
                                    <div class="field">
                                        <label>Detail</label>
                                        <textarea name="detail" value = {form.detail} placeholder="Write here" onChange={onChange}></textarea>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-10 p-3">
                                    <Button.Group>
                                        <Button color= "red" onClick={onClickCancel}><Icon  name='save' />Cancel</Button>
                                        <Button.Or />
                                        <Button positive onClick={onClickSave}><Icon  name='cancel' />Save</Button>
                                    </Button.Group>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                        

                </div>
            </div>
            
        </div>
    );
};

export default StadiumFormu;