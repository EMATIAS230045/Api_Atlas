import express from "express";
import empleyes from "../models/empleyes.js";

const empleyesDAO= {};

empleyesDAO.getAll=async()=>{
    return await empleyes.find();
}


export default empleyesDAO;