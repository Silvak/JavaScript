//const { getAge, getUUID } = require("../plugins");

const buildMakePerson = ({ getUUID, getAge }) => {

  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };

}


/*
const obj = { name: "Jhon", birthdate: "1999-12-20" };
const jhon = buildPerson(obj);

console.log(jhon);
*/

module.exports = {
  buildMakePerson,
}