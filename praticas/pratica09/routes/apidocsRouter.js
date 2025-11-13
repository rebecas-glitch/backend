import express from "express";
import swaggerUI from "swagger-ui-express";
import fs from "fs";
import YAML from "yamljs";

const router = express.Router();


const file = fs.readFileSync("./swagger/swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);


router.use("/", swaggerUI.serve);
router.get("/", swaggerUI.setup(swaggerDocument));

export default router;
