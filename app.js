const fs = require("fs");
const path = require("path");
const {Liquid} = require("liquidjs");

const projectsData = JSON.parse(fs.readFileSync("projects.json","utf-8"));


const engine = new Liquid({
    root: path.resolve(__dirname, "views/"),
    extname: ".liquid"
});

engine.renderFile("index.liquid",{projects: projectsData}).then((renderedOutput) => {
    console.log("Template rendered");
}).catch((error) => {
    console.error("Error rendering template", error);
});