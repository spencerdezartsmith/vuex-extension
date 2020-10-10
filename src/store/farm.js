export const state = () => ({
  farmer: 'Spencer',
  address: '17 Best Street, Farmtown',
  animals: {
    pigs: {
      albert: {
        name: 'Albert',
        color: 'pink',
        weight: 140,
        sex: 'male',
      },
      sarah: {
        name: 'Sarah',
        color: 'brown',
        weight: 140,
        sex: 'female',
      },
    },
    cows: {
      ruby: {
        name: 'Ruby',
        color: 'black/white',
        breed: 'fresian',
        sex: 'female',
        calves: {
          baby: {
            name: 'Baby',
            dob: '25-03-2019',
            color: 'black',
            sex: 'male',
          },
          sonya: {
            name: 'Sonya',
            dob: '18-02-2018',
            color: 'black',
            sex: 'female',
          },
        },
      },
    },
  },
});

export default {
  state,
};