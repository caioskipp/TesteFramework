export default class LoginRequestModel {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  mock() {
    return {
      email: 'email@teste.com.br',
      password: '1234teste',
    };
  }
}
