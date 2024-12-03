const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/assets";
const outputDir = "./public/assets";

fs.readdirSync(inputDir)
  .filter((file) => file.endsWith(".png"))
  .forEach((file) => {
    sharp(path.join(inputDir, file))
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, file.replace(".png", ".webp")))
      .then((info) => console.log(`Converted ${file} to WebP`))
      .catch((err) => console.error(`Error converting ${file}:`, err));
  });
