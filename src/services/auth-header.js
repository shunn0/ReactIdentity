export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.token) {
      return { Authorization: 'flag ' + user.token }; //Bearer
    } else {
      return {};
    }
  }