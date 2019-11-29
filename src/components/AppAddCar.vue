<template>
  <div>
    <h1>Add a new Car</h1>
    <br>
    <div class="form-row">
      <input type="text" class="form-control col-sm-3 m-1" placeholder="Brand" v-model="car.brand">
      <input type="text" class="form-control col-sm-3 m-1" placeholder="Model" v-model="car.model">
      <label for="yearselect" class="col-sm-1 text-right col-form-label">Year</label>
      <select class="custom-select col-sm-1 m-1" v-model="car.year" id="yearselect">
        <option v-for="(year, index) in 30" :key="index">{{1989 + year}}</option>
      </select>
    </div>
    <div class="form-row">
      <label for="maxspeed" class="col-sm-2 col-form-label">Max speed</label>
      <input type="number" class="form-control col-sm-2 m-1" id="maxspeed" v-model="car.maxSpeed">
      <label for="nrofdoors" class="col-sm-2 col-form-label">Nr. of doors</label>
      <input type="number" class="form-control col-sm-2 m-1" id="nrofdoors" v-model="car.numberOfDoors">
    </div>
    <div class="form-row">
      <div class="col-sm-1 m-1">
        <div class="custom-control custom-radio">
          <input type="radio" class="custom-control-input" id="enginediesel" v-model="car.engine" value="diesel">
          <label for="enginediesel" class="custom-control-label">Diesel</label>
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" class="custom-control-input" id="enginepetrol" v-model="car.engine" value="petrol">
          <label for="enginepetrol" class="custom-control-label">Petrol</label>
        </div>
      </div>
      <div class="col-sm-1 m-1">
        <div class="custom-control custom-radio">
          <input type="radio" class="custom-control-input" id="enginehybrid" v-model="car.engine" value="hybrid">
          <label for="enginehybrid" class="custom-control-label">Hybrid</label>
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" class="custom-control-input" id="engineelectric" v-model="car.engine" value="electric">
          <label for="engineelectric" class="custom-control-label">Electric</label>
        </div>
      </div>
      <div class="form-check m-1">
        <input type="checkbox" class="form-check-input" id="automaticcheckbox" v-model="car.isAutomatic">
        <label for="automaticcheckbox" class="form-check-label">Automatic</label>
      </div>
    </div>
    <button class="btn btn-primary ml-2" @click="submit">Submit</button>
    <button class="btn btn-outline-danger ml-2" @click="reset">Reset</button>
    <button class="btn btn-outline-secondary ml-2" @click="preview">Preview</button>
  </div>
</template>

<script>
import {add} from '../services/CarsService.js';
export default {
  data() {
    return {
      car: {
        brand: '',
        model: '',
        year: 0,
        maxSpeed: 0,
        numberOfDoors: 0,
        isAutomatic: false,
        engine: 'diesel'
      }
    }
  },
  methods: {
    submit() {
      console.log(this.car);
      add(this.car).then(this.$router.push('cars'));
    },
    reset() {
      this.car = {
        brand: '',
        model: '',
        year: 0,
        maxSpeed: 0,
        numberOfDoors: 0,
        isAutomatic: false,
        engine: 'diesel'
      }
    },
    preview() {
      let carStr = this.car.brand + ' ' + this.car.model + ' - ' + this.car.year + '\n' +
        this.car.maxSpeed + ' km/h, ' + this.car.numberOfDoors + ' doors, ' + 
        this.car.engine + ' engine\n' + (this.car.isAutomatic ? 'automatic' : 'manual') + ' transmition';
      alert(carStr);
    }
  }
}
</script>