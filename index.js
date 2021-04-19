import './styles/style.css';
import greet from './src/greeting.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
} else {
    console.log('production time!');
}

const elem = document.createElement('div');
greet(elem);
document.body.appendChild(elem);
