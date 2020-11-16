// import config from './config.js';

class Github {
  constructor() {
    (this.client_id = 'db267145bf6d67d1adbc'),
      (this.client_secret = 'afa1042ef595109d9dc752095dcdf0e52bb1a035');
    (this.repos_count = 5), (this.repos_sort = 'created: asc');
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}?sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
