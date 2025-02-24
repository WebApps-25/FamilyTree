// Using localStorage for persistence
export function getFamily() {
    const family = localStorage.getItem('familyTree');
    return family ? JSON.parse(family) : []; // Empty array if no data
}

export function addPerson(person) {
    const family = getFamily();
    family.push({ ...person, id: Date.now() }); // Simple unique ID
    localStorage.setItem('familyTree', JSON.stringify(family));
}

// Optional: Load from family.json instead (uncomment to use)
// export async function getFamily() {
//     const response = await fetch('/data/family.json');
//     return response.json();
// }