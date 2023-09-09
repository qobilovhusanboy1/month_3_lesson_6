const path = require("path");
const {v4: uuid} = require("uuid");

const CustomError = require("../utils/custom-error");
const galleryQuery = require("../queries/gallery.query");


const create_gallery = async(req, res, next) => {
    try {
        const image = req.files?.photo;

        const mimetype = path.extname(image.name);
        const photo = uuid() + mimetype;

        image.mv(process.cwd() + "/uploads/" + photo);

        const data = await galleryQuery.create(photo);

        res.status(201).json({message: "Created", image_id: data.id});
    } catch (error) {
        next()
    }
};
 
const get_gallery = async(req, res, next) => {
    try {
        const gallerys = await galleryQuery.find();
    
        res.json({message: "Success", data: gallerys});
      } catch (error) {
        next(error);
      }
};

const getOne_gallery = async(req, res, next) => {
    try {
        const {id} = req.params;
        const gallery = await galleryQuery.find_one(id);
    
        res.json({message: "Success", data: gallery});
      } catch (error) {
        next(error);
      }
};

const remove_gallery = async(req, res, next) => {
    try {
        const {id} = req.params;
    
        const data = await galleryQuery.remove(id)
    
        res.status(200).json({message: "Success", remove_gallery: data});
      } catch (error) {
        next(error);
      }
};


module.exports = {create_gallery, get_gallery, getOne_gallery, remove_gallery};