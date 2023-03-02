const getFakeUser = require('get-fake-user')
const randomstring = require("randomstring");
console.log(
  randomstring.generate({
    length: 12,
    charset: "alphabetic",
  }),
);
console.log(getFakeUser({count: 3,language: 'uk'}))
