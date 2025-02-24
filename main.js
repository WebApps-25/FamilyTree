export function getFamily() {
    const family = localStorage.getItem('familyTree');
    const defaultFamily = [
        { id: 1, name: "John Doe", birthDate: "1990-05-15" },
        { id: 2, name: "Jane Doe", birthDate: "1992-08-22" }
    ];
    return family ? JSON.parse(family) : defaultFamily;
}

export function addPerson(person) {
    const family = getFamily();
    family.push({ ...person, id: Date.now() });
    localStorage.setItem('familyTree', JSON.stringify(family));
}