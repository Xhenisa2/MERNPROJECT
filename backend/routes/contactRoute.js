const express = require('express');
const app = express();
const contactModel = require("../models/contactModel")

app.post("/addContact/",async(req,res)=>{
    try{
        //req.body merr info nga react//
      console.log(req.body)

      //Informacionet e marra nga react//
      const newContact = new contactModel(req.body)
      //ruajtja e informacionit ne databaze//
      await newContact.save()
      console.log("Contact added successfully" +newContact)
      res.status(200).send(newContact)

    }catch(err){
        console.log("Contact not added:",err)
        res.status(500).send("Contact not added")   
    }
})

module.exports = app;
