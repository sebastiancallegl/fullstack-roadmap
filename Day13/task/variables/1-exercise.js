/**
 * create 2 variables in the following lines, those variables shouldn't be initialized
 * the first variable should be named "firstName"
 * the second variable should be named "age"
 */


// Now add values to those variables, firstName should be "Marta", age should be "32"


// ******************* DONT MODIFY - START ******************* 
console.log("name is:", firstName);
console.log("age is:", age);
// ******************* DONT MODIFY - END ******************* 

// Now let's change the value to firstName, now we want it to be "Sandra"


// ******************* DONT MODIFY - START ******************* 
console.log("now name is:", firstName);
// ******************* DONT MODIFY - END ******************* 

/**
 * Now you have to create new variable, this variable should be constant and can't be modified.
 * the name of the variable should be "company" and the value should be "Globant".
 */


// ******************* DONT MODIFY - START ******************* 
try {
    if(!company) throw Error
    company = "Blankfactor";
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("you failed creating the new variable")
    } else {
        console.log("you did it well!")
    }
}
// ******************* DONT MODIFY - END ******************* 
