import AppCars from './components/AppCars.vue';
import AppAddCar from './components/AppAddCar.vue';

export const routes = [
    {
        path: '/cars',
        name: 'cars',
        component: AppCars
    },
    {
        path: '',
        redirect: 'cars'
    },
    {
        path: '/add',
        name: 'add',
        component: AppAddCar
    }
]