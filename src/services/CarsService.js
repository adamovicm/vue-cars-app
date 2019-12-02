import axios from 'axios';

export function getAll() {
    return axios
      .get('http://localhost:3000/api/cars')
      .then(response => response.data);
}

export function add(car) {
    return axios
        .post('http://localhost:3000/api/cars', car)
}

export function get(id) {
    return axios
        .get(`http://localhost:3000/api/cars/${id}`)
        .then(response => response.data);
}

export function edit(id, car) {
    console.log(id)
    return axios
        .put(`http://localhost:3000/api/cars/${id}`, car)
        .then(response => console.log(response));
}