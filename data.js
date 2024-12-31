const people = [
  {
    name: "rahul",
    city: "pune",
    ownsCar: true,
    occupation: "software Engineer",
    hobby: [
      { type: "outdoor activity", hobby: "gardening" },
      { type: "Indoor Game", hobby: "chess" },
    ],
    pets: [
      {
        type: "golden retriever",
        name: "Max",
        age: 4,
        fullyVaccinated: true,
        loves: "playing fetch in the park",
      },
    ],
    age: 21,
    employed: true,
    education: "computer science",
  },

  {
    name: "Ananya",
    city: "Bangalore",
    ownsCar: false,
    occupation: "software Engineer ",
    hobby: [{ type: "Indoor activity", hobby: "cooking" }],
    pets: [
      {
        type: "parrot",
        name: "Kiwi",
        age: 4,
        fullyVaccinated: false,
        loves: "mimicing Ananya's voice",
      },
    ],
    employed: false,
    age: 30,
    education: ["computer science", "graphic design"],
  },

  {
    name: "Ramesh",
    city: "Jaipur",
    ownsCar: false,
    occupation: "business owner ",
    hobby: [
      { type: "outdoor activity", hobby: "gardening" },
      { type: "reading", hobby: "historical fiction" },
    ],
    pets: [
      {
        type: "Persian cats",
        name: "Leo",
        age: 3,
        fullyVaccinated: true,
        loves: "love lounging in the sun",
      },
      {
        type: "Persian cats",
        name: ["Bella", "Leo"],
        age: 3,
        fullyVaccinated: true,
        loves: "love lounging in the sun",
      },
    ],
    employed: true,
    age: 45,
    education: "computer science",
  },

  {
    name: "Kavya",
    city: "Chennai",
    ownsCar: false,
    occupation: "professional dancer",
    hobby: [
      { type: "entertainment", hobby: "binge-watching" },
      { type: "entertainment", hobby: "sci-fi shows" },
      { type: "reading", hobby: "modern fantasy novels" },
    ],
    pets: [
      {
        type: "rabbit",
        name: "Snowy",
        age: 2,
        fullyVaccinated: true,
        loves: "hopping around her backyard and nibbling on carrots",
      },
    ],
    employed: false,
    age: 28,
    education: "",
  },
];

//1. How many individuals are currently employed?  // 2
const noOfEmployedPeople = function () {
  return people.filter((person) => person.employed).length;
};
console.log(noOfEmployedPeople());

//2. How many people own a car?  // 1
const noOfPeopleWhoOwnsCar = function () {
  return people.filter((person) => person.ownsCar).length;
};

console.log(noOfPeopleWhoOwnsCar());

//3. How many pets are fully vaccinated?   // 3
const countOfFullyVaccinated = function () {
  return people
    .flatMap((person) => person.pets)
    .filter((animal) => animal.fullyVaccinated);
};
console.log(countOfFullyVaccinated());

//4. What are the names of all the pets, and what type of animal is each?

const petNameAndType = ({ name, type }) => {
  return { name, type };
};

const getPetInfo = function () {
  return people.flatMap((person) => person.pets).map(petNameAndType);
};

console.log(getPetInfo());

//5. Which cities do the individuals live in?
people.map((person) => {
  return { person: person.name, city: person.city };
});

//6. How many hobbies are shared across the group? What are they? // 4
people.map((person) => person.hobbies).length;

//7. How many pets belong to people who are currently unemployed?  // 2
people
  .filter((person) => !person.employed)
  .map((person) => {
    return { name: person.name, numberOfPets: person.pets.length };
  });

//8. What is the average age of the individuals mentioned in the passage?  // 31
const sum = (sum, person) => sum + person.age;
people.reduce(sum, 0) / people.length;

//9. How many individuals have studied computer science, and how many of them have pets?       // 3
people.filter((person) => {
  return person.education.includes("computer science");
}).length;

//10. How many individuals own more than one pet?    // 1
people.filter((person) => person.pets.length > 1).length;

//11. Which pets are associated with specific favorite activities?
people
  .flatMap((person) => person.pets)
  .map((pets) => {
    return { pet: pets.name, "favourite activities": pets.loves };
  });

//12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
people
  .filter((person) => person.city === "Bangalore" || person.city === "Chennai")
  .flatMap((person) => person.pets)
  .map((animal) => animal.name);

//13. How many vaccinated pets belong to people who do not own a car?
people
  .filter((person) => !person.ownsCar)
  .flatMap((person) => person.pets)
  .filter((animal) => animal.fullyVaccinated);

//14. What is the most common type of pet among the group?
const frequencyCounter = function (frequencyCounter, element) {
  const isKeyPresent = element in frequencyCounter;

  frequencyCounter[element] = isKeyPresent ? frequencyCounter[element] + 1 : 1;
  return frequencyCounter;
};

export const occurenceCounter = function (list) {
  return list.reduce(frequencyCounter, {});
};

const animal = people
  .flatMap((person) => person.pets)
  .map((animal) => animal.type);
// console.log(animal);

//15. How many individuals have more than two hobbies?
// people.filter((person) => person.hobbyDetails.length > 2).length;

//16. How many individuals share at least one hobby with Ramesh?
// const RameshHobbies = people
//   .filter((person) => person.name === "Ramesh")
//   .flatMap((person) => person.hobbyDetails);

// const othersHobbies = people.filter((person) => person.name !== "Ramesh");
// othersHobbies.filter((person) => {
//   return (
//     person.hobbyDetails.includes(RameshHobbies[0]) ||
//     person.hobbyDetails.includes(RameshHobbies[1])
//   );
// }).length;

//17. Which pet is the youngest, and what is its name?    // print name too...
people
  .flatMap((person) => person.pets)
  .reduce(function (smallest, pets) {
    return pets.age < smallest ? pets.age : smallest;
  }, Infinity);

//18. What types of books are mentioned as interests, and who reads them?

const personWithHobbyReading = function (person) {
  return person.hobby.some((hobby) => hobby.type === "reading");
  // return person.hobby.filter((hobby) => hobby.type === "reading").length > 0;
};

const reading = people.filter(personWithHobbyReading);
console.log(
  reading.flatMap((person) => {
    return person.hobby
      .filter((hobby) => hobby.type === "reading")
      .map((book) => {
        return { book: book.hobby };
      });
  })
);
reading.map((person) => person.name);

//19. How many individuals live in cities starting with the letter "B"?
people.filter((person) => person.city.at(0) === "B");

//20. Which individuals do not own any pets?
people.filter((person) => person.pets.length === 0);
