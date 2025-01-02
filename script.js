// Ticket 1
console.log("Hello world!");

// Ticket 2
let member1 = {
    name: "Zsolt",
    age: 39,
    "eye colour": "green",
    height: 189,
    favouriteFood: "sushi",
};

let member2 = {
    name: "Jon",
    age: 28,
    "eye colour": "brown",
    height: 170,
    favouriteFood: "bangers & mash",
};

let member3 = {
    name: "Al",
    age: 28,
    "eye colour": "blue",
    height: 172,
    favouriteFood: "mash",
};

// module.exports = { member1, member2, member3 };

// Ticket 3
console.log(member1.age, member2.age, member3.age);
console.log(member1["eye colour"], member2["eye colour"], member3["eye colour"]);
member1.age++;
console.log(member1.age);

// Ticket 4
let ourTeam = {
    member1: {
        nickname: "George",
        superpower: "flying",
        favouriteAnimal: "dog",
        methodOfTransport: "tram",
    },
    member2: {
        nickname: "Jon",
        superpower: "super strong",
        favouriteAnimal: "dog",
        methodOfTransport: "car",
    },
    member3: {
        nickname: "Al",
        superpower: "healing",
        favouriteAnimal: "dog",
        methodOfTransport: "car",
    },
};

console.log(ourTeam.member1.favouriteAnimal, ourTeam.member2.favouriteAnimal, ourTeam.member3.favouriteAnimal);

// module.exports = { ourTeam };

// Ticket 5
function logFavouriteAnimals() {
    for (let i in ourTeam) {
        console.log(`${i} (${ourTeam[i].nickname}): ${ourTeam[i].favouriteAnimal}`);
    }
}

logFavouriteAnimals();

// module.exports = { ourTeam, logFavouriteAnimals };

// Final Ticket
const defaultName = "Gotchi";
let pet = {
    name: defaultName,
    fullness:  100,
    happiness: 100,
    energy:    100,
};
let causeOfDeath;
function displayState() {
    let state = "";
    if (pet.fullness  <= 20) { state += "😩 "; }
    if (pet.fullness  >= 80) { state += "🤤 "; }
    if (pet.happiness <= 20) { state += "😭 "; }
    if (pet.happiness >= 80) { state += "😃 "; }
    if (pet.energy    <= 20) { state += "🥱 "; }
    if (pet.energy    >= 80) { state += "🤩 "; }
    console.log(state);
    console.table(pet);
}
pet.name = prompt("What do you want to call me?", defaultName);
console.log(pet.name);
displayState();

while (
    pet.fullness  <= 100 &&
    pet.fullness  >  0   &&
    pet.happiness >  0   &&
    pet.energy    >  0
) {
    let input = prompt("Choose input to interact\n[1] Feed\n[2] Play\n[3] Sleep");
    switch (input) {
        case "1":
            pet.fullness  += 10;
            break;
        case "2":
            pet.fullness  -= 20;
            pet.happiness += 20;
            pet.energy    -= 20;
            break;
        case "3":
            pet.fullness  -= 10;
            pet.energy    += 20;
            break;
        default:
            console.log("Wrong input, it must be [1], [2] or [3]!");
            const rate = 5;
            pet.fullness  -= rate;
            pet.happiness -= rate;
            pet.energy    -= rate;
            break;
    }
    if (pet.happiness > 100) { pet.happiness = 100; }
    if (pet.energy    > 100) { pet.energy    = 100; }
    if (pet.fullness  < 0)   { pet.fullness  = 0; }
    if (pet.happiness < 0)   { pet.happiness = 0; }
    if (pet.energy    < 0)   { pet.energy    = 0; }
    displayState();
    if (pet.fullness  > 100) { causeOfDeath = "Overfeeding"; }
    if (pet.fullness  === 0) { causeOfDeath = "Starvation"; }
    if (pet.happiness === 0) { causeOfDeath = "Depression"; }
    if (pet.energy    === 0) { causeOfDeath = "Exhaustion"; }
}
console.log(`☠ Cause of death: ${causeOfDeath}`);
// alert(`☠ Cause of death: ${causeOfDeath}`);

// module.exports = { Tamagotchi, startGame };
