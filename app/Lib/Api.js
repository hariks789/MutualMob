
class Api {
  static headers() {
    return {
      'Content-Type': 'application/json',
    };
  }

  static get(route, token = '') {
    return this.xhr(route, null, 'GET', token);
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params, token = '') {
    return this.xhr(route, params, 'POST', token);
  }

  static delete(route, params, token = '') {
    return this.xhr(route, params, 'DELETE', token);
  }

  static xhr(route, params, verb, token = '') {
    console.log(route, 'route');
    const host = 'https://jsonplaceholder.typicode.com';
    const url = `${host}${route}`;
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    console.log('url', `${url}`, options, 'params:', params);
    return fetch(url, options)
    .then((res) => res.json())
    .catch((error, responseJson) => {
      return { status: 0, error: 'error' };
    });
  }
}

export default Api;