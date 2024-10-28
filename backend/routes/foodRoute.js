import express from "express"
import { addFood, listFood, removeFood } from "../controller/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

//  foodRouter.post("/add", upload.single("image"), addFood)





foodRouter.post("/add", upload.single("image"), (req, res, next) => {
    // Log req.file to check if the file is being uploaded
    console.log(req.file);
    next();
}, addFood);
//-------backup code if it is not working past the code----- is's is a post call code

foodRouter.get("/list", listFood)

foodRouter.post("/remove", removeFood);





export default foodRouter;