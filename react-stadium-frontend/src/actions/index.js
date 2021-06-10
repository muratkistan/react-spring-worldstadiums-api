
import { deleteStadium, getStadiums, updateStadium } from "../api/apiCalls";

export const stadiumGetir = (page) => dispatch => {
    getStadiums(page)
    .then(response => {
        dispatch({type: 'STADIUM_GETIR',payload: response.data})
    })
    .catch(() => {
        dispatch({type: 'STADIUM_GETIR_HATA',payload:'Stadiumlar yuklenirken hata olustu.'})
    })
}

export const stadiumDuzenle = (id,form,push) => dispatch => {

    updateStadium(id,form)
    .then(response => {
      dispatch({type: 'STADIUM_DUZENLE', payload: response.data});
       push(`/`);
    })
    .catch(err => {
        dispatch({type: 'STADIUM_DUZENLE_HATA', payload: "Baslik ve yazi icerigi alanlari zorunludur! "});
    });
}

export const stadiumSil = (id, close, push) => dispatch =>{
    deleteStadium(id)
        .then( () =>{
            dispatch({type: 'STADIUM_SIL',payload: id})
            close();
            push("/");
        })
        .catch( () =>{
            dispatch({type: 'STADIUM_SIL_HATA',payload: "Stadyumu silerken hata olustu."})
        });
}

export const showStadiumByProperty= (value)=> dispatch =>{
    dispatch({type: 'PROPERTY',payload: value})
}

