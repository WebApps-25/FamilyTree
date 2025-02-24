export function renderTree(family) {
    const container = document.getElementById('tree-container');
    container.innerHTML = '';
    console.log('Rendering family:', family);

    if (!family || family.length === 0) {
        container.innerHTML = '<p class="text-center">No family members yet. Add someone!</p>';
        return;
    }

    family.forEach(person => {
        const node = document.createElement('div');
        node.className = 'col-md-4 tree-node';
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