import path from "path";
import fs from "fs";

export default (req, res, next) => {
  res.render = (fileName, params) => {
    const filePath = path.resolve(__dirname, "..", "views", `${fileName}.html`);
    let file = fs.readFileSync(filePath, "utf-8");

    file = file.replace("#title#", params.title);
    file = file.replace("#Content#", params.content);

    res.send(file);
  };

  next();
};
