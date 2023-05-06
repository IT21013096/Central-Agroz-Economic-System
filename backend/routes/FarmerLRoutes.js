import express from "express";
import { publishCrop } from "../controllers/FarmerLControllers.js";
import { getAllCrops } from "../controllers/FarmerLControllers.js";
import { getCropById } from "../controllers/FarmerLControllers.js";
import { updateCropById } from "../controllers/FarmerLControllers.js";
import { deleteCropById } from "../controllers/FarmerLControllers.js";

const router = express.Router();

//publish crop
router.post("/publishcrop", publishCrop);
//get all crops
router.get("/getallcrops", getAllCrops);
//get crop by cropid
router.get("/getcropbyid/:id", getCropById);
//update crop by cropid
router.put("/updatecropbyid/:id", updateCropById);
//delete crop by cropid
router.delete("/deletecropbyid/:id", deleteCropById);








export default router;