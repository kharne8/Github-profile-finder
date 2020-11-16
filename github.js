// import config from './config.js';

class Github {
  constructor() {
    (this.client_id = 'db267145bf6d67d1adbc'),
      (this.client_secret = 'afa1042ef595109d9dc752095dcdf0e52bb1a035');
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}

// export default class Github {
//   constructor() {
//     (this.client_id = config.id), (this.client_secret = config.secret);
//   }

//   async getUser(user) {
//     const profileResponse = await fetch(
//       `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
//     );

//     const profile = await profileResponse.json();

//     return {
//       profile,
//     };
//   }
// }
