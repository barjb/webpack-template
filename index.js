import './style.css'
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
} else {
    console.log('production time!');
}

console.log('hi');
const elem = document.createElement('h1');
elem.innerHTML = 'halo halo dodalem z js';
document.body.appendChild(elem);
console.log('all')
