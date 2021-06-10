import axios from 'axios';

export const createStadium = (body) => {
    return axios.post('/api/1.0/create-stadium',body);
};

export const getStadiums = (sira = 0,size =5) => {
    return axios.get(`api/1.0/stadiums?page=${sira}&size=${size}`);
}

export const getStadiumById = (id) => {
    return axios.get(`api/1.0/stadiums/${id}`);
}

export const updateStadium = (id, stadium) => {
    return axios.put(`api/1.0/update/${id}`,stadium);

}

export const deleteStadium = (stadiumId) => {
    return axios.delete(`api/1.0/delete/${stadiumId}`);

}

export const getCountryDetails = () => {
    return axios.get("https://restcountries.eu/rest/v2/all");
}