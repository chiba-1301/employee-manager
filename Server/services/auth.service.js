const USER = require('../models/User')
const argon2 = require('argon2')
const {ACCESS_TOKEN_SECRET} = require('../models/index')
const jwtService = require('./jwt.service')

const registerEmployee = async(body)=>{
    try {
        const {username, password, fullname, role, address, IDcard, telephone} = body
        const existUser = await USER.findOne({
            username: username
        })
        if(existUser) return{
            message: 'User already exist !',
            success: false
        }
        const hashedPassword = await argon2.hash(password)

        const newUser = new USER({ username, password: hashedPassword, fullname, role, address, IDcard, telephone})

        await newUser.save()
        return {
            message: 'Create user successfully!',
            success: true,
            data: {}
        };
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
          }
    }
}
const login = async (body)=>{
    try {
        const{ username, password} =body
        const user = await USER.findOne({
            username: username
        })
        console.log(user)
        if(!user) return {
            message: 'Invalid user!',
            success: false,
        }
        const PasswordValid = await argon2.verify(user.password, password)
        if(!PasswordValid) {
            return {
                message: 'Invalid password!',
                success: false
            }   
        }
        const generateToken = jwtService.createToken(user._id)
        return {
            message: 'Login successfully!',
            success: true,
            data: { token: generateToken}
        }
    } catch (error) {
      console.log(error)
        return {
            message: "An error occurred!",
            success: false
        }
        
    }
}
const getAuth= async(body)=>{
    try {
        const user = await USER.findById(body)
        if(!user) {
            return {
                message: "Login Fail!",
                success: false
            }
        }
        return{
            message: "Login Successfully!",
            success: true,
            data: user
        }
    } catch (error) {
        return {
            message:"An error occurred",
            success: false
        }
    }
}
const getAllUsers = async () => {
    try {
      const users = await USER.find({})
      return {
        message: 'Successfully get all users',
        success: true,
        data: users
      }
    } catch (error) {
      return {
        message: 'An error occurred',
        success: false
      }
    }
  }
  const changePassword = async (id, body) => {
    try {
      const user = findUserNameAndPass(id, body)
      if (!user) {
        return {
          message: 'Do not Found User',
          success: false,
          data: user
        }
      }
      const newPassword = await bcrypt.hash(body.newPassword, 8)
      user.password = newPassword
      await user.save()
  
      return {
        message: 'Change Password Successfully',
        success: true
      }
    } catch (error) {
      return {
        message: 'An error occurred',
        success: false
      }
    }
  }
  
  const getProfile = async (id) => {
    try {
      const info = await USER.findOne({ _id: id })
      return {
        message: 'Successfully get information',
        success: true,
        data: info
      }
    } catch (error) {
      return {
        message: 'An error occurred',
        success: false
      }
    }
  }
  
  
  
  const updateUserProfile = async (id, body) => {
    try {
  
      const userUpdate = await USER.findByIdAndUpdate(id, body)
      console.log(1)
      if (userUpdate) {
        return {
          message: 'Successfully update user',
          success: true,
        }
  
      }
      return {
        message: 'Fail update user',
        success: false,
      }
    } catch (error) {
      return {
        message: 'An error occurred',
        success: false
      }
    }
  }
  
  
module.exports ={
    registerEmployee,
    login, 
    getAuth,
    updateUserProfile,
    getAllUsers,
    changePassword,
}