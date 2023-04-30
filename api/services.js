import axios from "axios";
const API_URL = 'https://api-colombia.com/api/v1'

//Get info presidentes colombia
export const getPresidents = async () => {
    const response = await axios.get(`${API_URL}/President`);
    return response.data;
}

//Get info departamentos colombia
export const getDepartamentosColombia = async () => {
    const response = await axios.get(`${API_URL}/Department`);
    return response.data;
}


