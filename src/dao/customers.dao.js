import express from "express";
import customers from "../models/customers.js";

const customersDAO= {};

customersDAO.getAll=async()=>{
    return await customers.find();
}

customersDAO.getOne=async()=>{
    return await customers.findOne({customer_client:customer_client})
}

export default customersDAO;