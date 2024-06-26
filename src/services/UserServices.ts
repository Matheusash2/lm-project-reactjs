import { HttpApiServices } from './HttpApiServices';

export class UserServices extends HttpApiServices {
  async getUser(id: string) {
    return await this.get('/user/' + id);
  }

  async getEmployee(id: string) {
    return await this.get('/user/employee/' + id);
  }
}
