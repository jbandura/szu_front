`import Mirage , {faker} from 'ember-cli-mirage';`

StudentFactory = Mirage.Factory.extend
  name: faker.name.firstName
  surname: faker.name.lastName
  street: faker.streetAddress
  city: faker.city
  country: faker.country
  phone_nr: faker.phoneNumber
  acceptedTerms: true
  student_group_id: 0
  payments: []

`export default StudentFactory`
