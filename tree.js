export function renderTree(family) {
    const container = document.getElementById('tree-container');
    container.innerHTML = '';
    family.forEach(person => {
        const node = document.createElement('div');
        node.textContent = `${person.name} (${person.birthDate || 'Unknown'})`;
        container.appendChild(node);
    });
    // Add SVG or library logic here for a real tree later
}