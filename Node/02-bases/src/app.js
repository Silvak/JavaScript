//const { emailTemplate } = require("./js-foundation/01-template");
//require("./js-foundation/02-destructuring");
//const { getUserById } = require("./js-foundation/03-callbacks");
const { getAge, getUUID } = require("./plugins");
const { buildMakePerson } = require("./js-foundation/05-factory");

const makePerson = buildMakePerson({ getUUID, getAge })

const obj = { name: "Jhon", birthdate: '1999-12-20' }
const john = makePerson(obj)

console.log(john)

//callback
/*
const id = 1;
getUserById(id, (error, user) => {
  if (error) {
    throw new Error(error);
  }

  console.log(user);
});
*/

//console.log(emailTemplate);
