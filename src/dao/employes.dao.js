import express from "express";
import empleyes from "../models/empleyes.js";

const empleyesDAO= {};

empleyesDAO.getAll=async()=>{
    return await empleyes.find();
}
empleyesDAO.getOne=async(empleyes_number)=>{
    return await empleyes.findOne({empleyes_number:empleyes_number});
}
empleyesDAO.updateOne=async(empleyes_number)=>{
    return await empleyes.findOneAndUpdate({empleyes_number:empleyes_number})
}
empleyesDAO.deleteOne=async(empleyes, empleyes_number)=>{
    return await empleyes.findOneAndDelete({empleyes_number:empleyes_number})
}

export default empleyesDAO;