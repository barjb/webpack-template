export default function greet(node) {
    const element = document.createElement('h1');
    element.innerText = 'hello from greeting.js';
    node.appendChild(element);
    console.log('run greet');
}
