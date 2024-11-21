import axios from 'axios';


const API_URL = 'http://localhost:5000/api/places';

export const fetchPlaces = async (filters) => {
    try {
        const response = await axios.get('http://localhost:5000/api/places', { params: filters });
        return response.data;
    } catch (error) {
        console.error('Error fetching places:', error);
        throw error;
    }
};


export const fetchItemById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching item by ID:', error);
        throw new Error('Item not found or an error occurred while fetching the place.');
    }
};
