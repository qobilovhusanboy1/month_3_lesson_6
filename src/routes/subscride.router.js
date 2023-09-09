const { Router } = require("express");

const {create_subscride, getOne_subscride, get_subscride, update_subscride, remove_subscride} = require("../controllers/subscride.controller")

const router = Router();

router.get("/get/subscride", get_subscride);
router.put("/update/subscride/:id", update_subscride);
router.get("/get/subscride/:id", getOne_subscride);
router.post("/create/subscride", create_subscride);
router.delete("/remove/subscride/:id", remove_subscride);


module.exports = router;