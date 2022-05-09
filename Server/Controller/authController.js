const express = require("express");
const authService = require("../services/auth.service")
const controller =require("./controller")
const User = require("../models/User")

const registerEmployee = async (req, res) =>{
  try {
    const resAuth = await authService.registerEmployee(req.value.body)
    if (!resAuth.success) return controller.sendError(res)
    return controller.sendSuccess(res, resAuth.data, 200, resAuth.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

const login = async (req, res) => {
  try {
    const resServices = await authService.login(req.value.body)
    if (!resServices.success) {
      return controller.sendSuccess(res,{} ,300, resServices.message)
    }
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  
  } catch (err) {
    return controller.sendError(res)
  } 
}

const getAuth = async(req, res)=>{
  try {
    const body =req.value.body
    const _id=body.decodeToken.data
    const token =body.token
    const CheckData = await authService.getAuth({_id, token})
    return controller.sendSuccess(res, CheckData.data, 200, CheckData.message)
  } catch (error) {
     return controller.sendError(res)
  }
}
module.exports={
  registerEmployee,
  login,
  getAuth
}