import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7500/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserContenido() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getContenidoAdmin() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
