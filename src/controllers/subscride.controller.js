const subscrideQuery = require("../queries/subscride.queries")
const CustomError = require("../utils/custom-error");
const subscrideValidation = require("../validations/subscride.validation")

const create_subscride = async(req, res, next) => {
    const {email} = req.body;

    const result = await subscrideValidation.create({email});
    if (result.error) throw new CustomError(result.error.message, 400);

    const data = await subscrideQuery.create(email);

    res.status(201).json({message: "Success", data});
};

const get_subscride = async(req, res, next) => {
    try {
        const subscride = await subscrideQuery.find();
    
        res.json({message: "Success", data: subscride});
      } catch (error) {
        next(error);
      }
};

const getOne_subscride = async(req, res, next) => {
    try {
        const {id} = req.params;
        const subscride = await subscrideQuery.find_one(id);
    
        res.json({message: "Success", data: subscride});
      } catch (error) {
        next(error);
      }
};

const update_subscride = async(req, res, next) => {
    try {
        const {id} = req.params;
        const {email} = req.body;
    
        const data = await subscrideQuery.update(email, id);
    
        res.json({message: "Success", data});
      } catch (error) {
        next(error);
      }
};

const remove_subscride = async(req, res, next) => {
    try {
        const {id} = req.params;
    
        const data = await subscrideQuery.remove(id);
    
        res.status(200).json({message: "Success", remove_data: data});
      } catch (error) {
        next(error);
      }
};

module.exports = {
    create_subscride,
    getOne_subscride,
    get_subscride,
    update_subscride,
    remove_subscride
};