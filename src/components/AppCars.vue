<template>
  <div>
    <h1>CARS</h1>
    <br>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Brand</th>
          <th scope="col">Model</th>
          <th scope="col">Year</th>
          <th scope="col">Max Speed</th>
          <th scope="col">Transmition</th>
          <th scope="col">Engine</th>
          <th scope="col"># of doors</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car, index) in cars" :key="index">
          <td>{{car.id}}</td>
          <td>{{car.brand}}</td>
          <td>{{car.model}}</td>
          <td>{{car.year}}</td>
          <td>{{car.maxSpeed}} km/h</td>
          <td>{{car.isAutomatic ? 'Automatic' : 'Manual'}}</td>
          <td>{{car.engine}}</td>
          <td>{{car.numberOfDoors}}</td>
          <!-- <td><button class="btn btn-primarty">Edit</button></td> -->
          <td><router-link :to="`edit/${car.id}`">Edit</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {getAll} from '../services/CarsService.js';
export default {
  data() {
    return {
      cars: []
    }
  },
  created() {
    getAll().then(cars => {
      this.cars = cars;
    });
  }
}
</script>