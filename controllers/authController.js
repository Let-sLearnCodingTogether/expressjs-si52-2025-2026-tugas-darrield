import UserModel from "../models/userModel.js";
import { hash } from "../utils/hashUtil.js";
import { jwtSignUtil } from "../utils/jwtSignUtil.js"
import { compare } from "../utils/hashUtil.js"
export const register = async (req, res) => {
    try{
        const registerData = req.body
        
        console.log(registerData);

        const hashPassword = hash(registerData.password)

        await UserModel.create({
            username : registerData.username,
            email : registerData.email,
            password : hashPassword
        })

        res.status(201).json({
            message : "Berhasil resiter, silahkan login",
            data : null
        })

    }catch(e) {
        res.status(500).json({
            message : e.message,
            data : null
        })
    }

}

export const login = async (req,res) => {
    try {
        const loginData = req.body

        const user = await UserModel.findOne({
            email : loginData.email
        })

        if (!user) {
            res.status(404).json({
                message : "user tidak ditemukan",
                data : null
            })
        }

        if(compare(loginData.password, user.password)) {
            return res.status(200).json({
                message : "Login berhasil",
                data : {
                    username : user.username,
                    email : user.email,
                    token : jwtSignUtil(user)
                }
            })
        }

        return res.status(401).json({
                message : "Login gagal",
                data : null
        })

    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

