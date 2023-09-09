const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");

const routes = require("./routes");
const config = require("../config");
const errorHandler = require("./middlewares/error-handler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());
app.use(express.static(process.cwd() + "/uploads")); 

app.use(cors());
app.use("/", routes);
app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log(`Server is running on port: ${config.PORT}`);
});