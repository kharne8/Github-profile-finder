class Github {
  constructor() {
    (this.client_ID = 'db267145bf6d67d1adbc'),
      (this.client_secret = 'afa1042ef595109d9dc752095dcdf0e52bb1a035');
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id${this.client_ID}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    console.log(profile);

    return {
      profile,
    };
  }
}
