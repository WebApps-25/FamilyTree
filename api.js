// Using localStorage for persistence
/*export function getFamily() {
    const family = localStorage.getItem('familyTree');
    console.log('Family data:', family);
    return family ? JSON.parse(family) : [];
}*/

export function addPerson(person) {
    const family = getFamily();
    family.push({ ...person, id: Date.now() });
    localStorage.setItem('familyTree', JSON.stringify(family));
}


export async function getFamily() {
     const response = await fetch('/data/family.json');
    return response.json();
}