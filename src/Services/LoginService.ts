import bcrypt from 'bcryptjs';
import UserModel, { UserSequelizeModel } from '../database/models/user.model';
import { Login } from '../types/User';

async function Loginpost(login: Login) :Promise<UserSequelizeModel> {
  const usuario = await UserModel.findOne({ where: { username: login.username } });
  if (!usuario || !bcrypt.compareSync(
    login.password,
    usuario.dataValues.password,
  )) { throw new Error('"Username or password invalid" '); }
  return usuario;
}

export default {
  Loginpost,
};