const os = require("node:os");

console.log("Uptime", os.uptime() / 60 / 60);