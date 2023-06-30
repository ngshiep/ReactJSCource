const animals = ["tiger", "monkey"]

const checkAnimalExistInZoo = (animal) => {
    if (animals.includes(animal)) {
        console.log(animal + ' exist');
    }
    else {
        console.log(animal + 'dont exist');
    }
}

const addAnimal = (animal) => {
    if (!animals.includes(animal)) {
        animals.push(animal)
        console.log('add ' + animal + ' success!');
    }
    else {
        console.log(animal + ' exist');
    }
}

const removeAnimal = (animal) => {
    if (animals.includes(animal)) {
        animals = animals.filter(ani => ani !== animal)
        console.log('remove ' + animal + ' success!');
    }
    else {
        console.log(animal + 'dont exist');
    }
}

const logAllAnimal = () => {
    animals.forEach(ani => console.log(ani))
}