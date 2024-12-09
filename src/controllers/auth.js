import { generateJWT } from "../helpers/jwt.js";
import { User } from "../models/User.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "El usuario ya existe",
        ok: false,
      });
    }
    user = new User(req.body);
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    await user.save();
    const token = await generateJWT(user.id, user.name);
    res.status(200).json({
      message: "create user",
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Oops ha ocurrido un error",
      ok: false,
    });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "El correo no esta registrado en el sistema",
        ok: false,
      });
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Password incorrecto",
        ok: false,
      });
    }
    const token = await generateJWT(user.id, user.name);
    res.status(200).json({
      message: "login user",
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Oops ha ocurrido un error",
      ok: false,
    });
  }
};
export const renewToken = async(req, res) => {
const {uid, name} = req
  const token = await generateJWT(uid, name);
  res.json({
    message: "renew token",
    ok: true,
    token
  });
};
