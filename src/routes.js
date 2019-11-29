import AppCars from './components/AppCars.vue';

export const routes = [
    {
        path: '/cars',
        name: 'cars',
        component: AppCars
    },
    {
        path: '',
        redirect: 'cars'
    }
]