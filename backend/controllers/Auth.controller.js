const {AuthModel} = require('../models/authentication.model');
const authModel = new AuthModel();

class AuthControl {
  async login(method, user) {
    try {
      const { username, password } = method.getBody();

      const {token} = await authModel.login(username, password);

      method.res.header("authorization", token);
    } catch (error) {
      return error;
    }
  }

  async register(method, user) {
    try {
      const {name,password,age,address,contact,email } = method.getBody();

      const {token} = await authModel.register(name,password,age,address,contact,email);
      
      method.res.header("authorization", token);
    } catch (error) {
      return error;
    }
  }
}

module.exports = {AuthControl};
