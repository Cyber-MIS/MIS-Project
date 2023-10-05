const {AuthModel} = require('../models/authentication.model');
const authModel = new AuthModel();

class AuthControl {
  async login(method, user) {
    try {
      const { username, password } = method.getBody();

      const {token} = await authModel.login(username, password);
      console.log(token)
      method.res.header("authorization", token);
    } catch (error) {
      return error;
    }
  }

  async register(method, user) {
    try {
      const {name,username,password,age,address,contact,email } = method.getBody().user;

      const {token} = await authModel.register(name,username,password,age,address,contact,email );
      console.log(token)
      method.res.header("authorization", token);
    } catch (error) {
      return error;
    }
  }
}

module.exports = {AuthControl};
