// here we have a basic person object

const person = {
    firstName: "",
    lastName: ""
}


// 1. the person doesn't have a name, please add your first name and last name to the person

// develop your code here


// end

console.log("first name:", person.firstName);
console.log("last name:", person.lastName);

// 2. nice! now we need that this person to be able to say Hello, create a method to say hello named "greet"

// develop your code here


// end

person.greet();

/**
 * 3.   excellent now we need to add an address to that person
 *      please add a value for each property in the object address
 *      then add the object address to the person.       
 */
const address = {
    city: "",
    street: "",
    country: ""
}

// develop your code here


// end

console.log(person.address);

/**
 *  4.  hold on! we forget that you have 3 dogs!
 *      add the dogs to the person object
 *      to avoid this happen again create a method called "listPets"
 *      that method should print an Array of your dogs name:  ["ranchera", "roberto", "carlota"]
 */

const dogs = {
    ranchera: {
        breed: "Basset Hound",
        age: 4,
        color: "brown"
    },
    roberto: {
        breed: "Beagle",
        age: 10,
        color: "white"
    },
    carlota: {
        breed: "Border Collie",
        age: 8,
        color: "black"
    }
}

// develop your code here


// end
person.listPets();

/**
 *  5.  it can't be true, we forget to add gender to our pets
 *      use a loop to add the gender properties to our pets.
 *      also create a method that receives the name of one of the pets
 *      and print the names age and gender, the method should be named "petInfo": "roberto is 10 years old and is a male dog"
 */

const dogsGender = {
    ranchera: "female",
    roberto: "male",
    carlota: "female",
}

// develop your code here


// end
person.petInfo("ranchera")
person.petInfo("roberto")
person.petInfo("carlota")
