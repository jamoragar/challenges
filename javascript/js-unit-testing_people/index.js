export function getFirstNames(people) {
  return people
    .map((person) => person.firstName);
}

export function getFullNames(people) {
  return people
    .map(person => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people
    .map(person => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people
    .filter(person => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  const peopleOlderThan = people.filter(person => person.age > age);

  return peopleOlderThan
    .map(people => `${people.firstName} ${people.lastName}`)
}

export function getPeopleByLastName(people, lastName) {
  return people
    .filter(people => people.lastName === lastName)
    .map(people => `${people.firstName} ${people.lastName}`);
}

export function findPersonById(people, id) {
  return people
    .find(person => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people
    .some(person => person.age > age);
}

export function getFullNamesSortedByAge(people) {
  const sortedPeople = [...people].sort((a, b) => a.age - b.age);
  return sortedPeople
    .map(person => `${person.firstName} ${person.lastName}`);
}
