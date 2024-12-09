import { User } from "../models/User.js"

export const createUser = async(req, res) => {
    const {email} = req.body;
   try {
    let user = await User.findOne({email});
    if(user){
        return res.status(400).json({
            message: 'El usuario ya existe',
            ok: false,
        })
    }
    user = new User(req.body);
    await user.save();
    res.status(200).json({
        message: 'create user',
        ok: true,
        user
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Oops ha ocurrido un error',
        ok: false,
    })
   }
}
export const loginUser = (req, res) => {
    const user = req.body
    
    res.status(200).json({
        message: 'login user',
        ok: true,
        user
    })
}
export const renewToken = (req, res) => {
    res.json({
        message: 'renew token',
        ok: true,
    })
}