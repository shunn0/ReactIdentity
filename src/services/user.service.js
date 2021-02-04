import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';
//const API_URL = "http:/ec2-18-216-185-152.us-east-2.compute.amazonaws.com:8080/api/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getPermissionList() {
    return axios.get(API_URL + 'permissions', { headers: authHeader() });
  }

  getRolesList() {
    return axios.get(API_URL + 'roles', { headers: authHeader() });
  }

  getAllUserList() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }
}

export default new UserService();