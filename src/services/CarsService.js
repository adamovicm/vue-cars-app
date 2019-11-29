import axios from 'axios';

export function getAll() {
    return axios
      .get('http://localhost:3000/api/cars')
      .then(response => response.data);
}