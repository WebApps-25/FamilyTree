import { getFamily, addPerson } from './api.js';
import { renderTree } from './tree.js';

document.getElementById('add-person-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const birthDate = document.getElementById('birthDate').value;
    addPerson({ name, birthDate });
    const family = getFamily();
    renderTree(family);
    e.target.reset(); // Clear form
});

// Load initial tree
function init() {
    const family = getFamily();
    renderTree(family);
}
init();