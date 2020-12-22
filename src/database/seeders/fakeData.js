const faker = require('faker');

// Default password: 123132
const defaultPassword =
  '$2a$12$VvWghIAnvkFgVG1hZ6OGyeaDtEPKGxZYmEu9PExiuke2WCDS5Fywe';

// Fake 2 role ids for member, admin
const roleIds = {
  member: faker.random.uuid(),
  admin: faker.random.uuid(),
};

// Fake 50 members
const members = [...Array(50)].map(() => ({
  id: faker.random.uuid(),
  email: faker.internet.email(),
  password: defaultPassword,
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  avatar: faker.internet.avatar(),
  phone: faker.phone.phoneNumber(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

// Set role for 50 members
const memberRoles = members
  .map((member) => member.id)
  .map((id) => ({
    userId: id,
    roleId: roleIds.member,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

module.exports = {
  defaultPassword,
  roleIds,
  members,
  memberRoles,
  up: () => Promise.resolve(),
  down: () => Promise.resolve(),
};
