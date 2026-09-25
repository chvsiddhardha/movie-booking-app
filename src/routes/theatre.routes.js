const express= require("express");
const router = express.Router();

const theatherController=require("../controllers/theatre.controller");

router.get("/",theatherController.getAllTheathers);
router.get("/:id",theatherController.getTheathersById);
router.post("/",theatherController.createTheather);
router.put("/:id",theatherController.updateTheather);
router.delete("/:id",theatherController.deleteTheather);

module.exports=router;