const { Router } = require("express");

const {create_contact_us, get_contact_us, get_contact_us_one, update_contact_us_one, delete_contact_us_one} = require("../controllers/contact_us.controller")

const router = Router();

router.get("/contacts", get_contact_us);
router.get("/contact/:id", get_contact_us_one);
router.post("/create/contact", create_contact_us);
router.put("/update/contact/:id", update_contact_us_one);
router.delete("/delete/contact/:id", delete_contact_us_one);

module.exports = router;