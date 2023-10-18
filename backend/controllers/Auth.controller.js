const {AuthModel} = require('../models/authentication.model');
const authModel = new AuthModel();

class AuthControl {
  async login(method) {
    try {
      const { username, password } = method.getBody();

      const {token} = await authModel.login(username, password);
  
      return (token,method.req.user.role)
    } catch (error) {
      return error;
    }
  }

  
  async register(method) {
    try {
      const {name,username,password,age,address,contact,email } = method.getBody().user;

      const {token} = await authModel.register(name,username,password,age,address,contact,email );
      
      return (token)
    } catch (error) {
      return error;
    }
  }
}

module.exports = {AuthControl};
