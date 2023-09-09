const CustomError = require("../utils/custom-error");
const contactQuery = require("../queries/contact_us.query");
const contactValidator = require("../validations/contact.validation");


const create_contact_us = async(req, res, next) => {
    try {
        const {name, phone_number, email, message} = req.body;
        
        const result = await contactValidator.create({name, phone_number, email, message});
        if (result.error) throw new CustomError(result.error.message, 400);
          
        const data = await contactQuery.create(name, phone_number, email, message);
        
        res.status(201).json({message: "Success", data});
    } catch (error) {
        next(error);
    }
};

const get_contact_us = async(req, res, next) => {
    try {
        const contacts = await contactQuery.find();

        res.json({message: "Success", data: contacts});
    } catch (error) {
        next(error);
    }
}

const get_contact_us_one = async(req, res, next) => {
    try {
        const {id} = req.params;
        const contact = await contactQuery.find_one(id);

        res.json({message: "Success", data: contact});
    } catch (error) {
        next(error);
    }
}

const update_contact_us_one = async(req, res, next) => {
    try {
        const {id} = req.params;
        const {name, phone_number, email, message} = req.body;

        const data = await contactQuery.update(name, phone_number, email, message, id);

        res.status(203).json({message: "Success", update_data: data});
    } catch (error) {
        next.error();
    }
}

const delete_contact_us_one = async(req, res, next) => {
    try {
        const {id} = req.params;

        const data = await contactQuery.remove(id);

        res.status(200).json({message: "Success", remove_contact: data});
    } catch (error) {
        next(error);
    }
}


module.exports = {create_contact_us, get_contact_us, get_contact_us_one, update_contact_us_one, delete_contact_us_one};