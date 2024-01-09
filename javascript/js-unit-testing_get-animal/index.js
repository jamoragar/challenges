export function getAnimal(animal) {
    return animal === 'cats'
    ? 'I totally love cats!'
    : animal
    ? `I like ${animal}!`
    : 'I do not like animals at all!';
  }
