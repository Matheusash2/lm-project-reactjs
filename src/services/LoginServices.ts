import { HttpApiServices } from "./HttpApiServices";

export class LoginServices extends HttpApiServices {
  async login(body: any, setToken: any) {
    const { data } = await this.post("/login", body);

    if (data) {
      localStorage.setItem("token", data.access_token);

      const userResponse = await this.get("/user");
      if (userResponse && userResponse.data) {
        const user = userResponse.data;
        localStorage.setItem("userName", user.userName);
        localStorage.setItem("id", user.id);
        localStorage.setItem("name", user.name);
      }
    }
    setToken(data.access_token);
  }

  logout(setToken: any) {
    localStorage.clear();
    setToken("");
  }
}
