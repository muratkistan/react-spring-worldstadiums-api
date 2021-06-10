const INITIAL_STATE = {
    page: {
        content: [
            
        ],
        size: 3,
        number: 0
    },
    pageHata: '',
    stadiumDuzenleHata:'',
    stadiumDetayi: {id: "", image:"" , name:"",team: "",capacity: "",country: "",city: "",openingDate: ""},
    stadiumSilhata:'',

    // showProperty:{country:'',city:'',capacity:''}
    country: '',
    city: '',
    capacity:""


    
}


export const reducer = (state= INITIAL_STATE, action) =>{
    switch(action.type){
        case 'STADIUM_GETIR':
            return {...state , page: action.payload};
        case 'STADIUM_GETIR_HATA':
            return {...state ,pageHata: action.payload};
        case 'STADIUM_DUZENLE':
            // return { ...state, stadiumDetayi: {...state.stadiumDetayi,...action.payload}, stadiumDuzenleHata: ""};   
            const updateStadiums = state.page.content.filter(stadium => stadium.id !== action.payload.id);
            return {...state,...state.page,content:[...updateStadiums,action.payload]};
        case 'STADIUM_DUZENLE_HATA':
            return { ...state, stadiumDuzenleHata: action.payload};
            case 'STADIUM_SIL' :
                return {...state, page: {...state.page, content:[...state.page.content.filter(stadium => stadium.id !== action.payload)],},stadiumSilhata: ""};    
            case 'STADIUM_SIL_HATA' : 
                return { ...state , stadiumSilhata: action.payload};
            case 'PROPERTY' : 
                return {...state , country: action.payload};

        default:
            return state;    
    }
    

}