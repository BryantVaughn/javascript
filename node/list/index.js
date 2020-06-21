const fs = require("fs");

fs.readdir(process.cwd(), (err, files) => {
  if (err) throw new Error(err);

  console.log(files);
});
