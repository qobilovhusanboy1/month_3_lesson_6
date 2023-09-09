const { Router } = require("express");

const {create_gallery, getOne_gallery, get_gallery, remove_gallery} = require("../controllers/gallery.controller");

const router = Router();

router.post("/create/gallery", create_gallery);
router.get("/get/gallery", get_gallery);
router.get("/get/gallery/:id", getOne_gallery);
router.delete("/delete/gallery/:id", remove_gallery);

module.exports = router;