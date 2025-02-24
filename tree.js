export function renderTree(family) {
    const container = document.getElementById('tree-container');
    container.innerHTML = '';

    family.forEach(person => {
        const node = document.createElement('div');
        node.className = 'col-md-4 tree-node'; // Bootstrap column for responsiveness
        node.innerHTML = `
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${person.name}</h5>
                    <p class="card-text">${person.birthDate || 'Unknown'}</p>
                </div>
            </div>
        `;
        container.appendChild(node);
    });
}