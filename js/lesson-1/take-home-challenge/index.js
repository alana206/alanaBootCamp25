const { faker } = require('@faker-js/faker');


 function createRandomUser() {
  return {
    Name: faker.person.fullName(),
    Email: faker.internet.email(),
    Address: faker.location.streetAddress({ useFullAddress: true }),
    Phone: faker.phone.number({ style: 'national' })
  };
}
const numberOfUsers = Number(process.argv[2]);

 const users = faker.helpers.multiple(createRandomUser, {
  count: numberOfUsers,
});

// console.log(users)
let i = 0;
let output = "Generated User Data:"

for (const user of users) {
  i++
  output += `
  ${i}. Name:${user.Name}
     Email:${user.Email}
     Address:${user.Address}
     Phone:${user.Phone}
     `
}
  console.log(output)




// //Generated User Data:
// 1. Name: John Doe
//    Email: john.doe@example.com
//    Address: 123 Main St
//    Phone: (123) 456-7890

