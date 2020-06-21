#!/usr/bin/env node

const fs = require("fs");

fs.readdir(process.cwd(), (err, files) => {
  if (err) throw new Error(err);

  // BAD CODE TO FIND IF FILE OR DIRECTORY
  // for (let file of files) {
  //   fs.lstat(file, (err, stats) => {
  //     if (err) throw new Error(err);

  //     console.log(file, stats.isFile());
  //   });
  // }

  // Callback-Based Approach #1
  const allStats = Array(files.length).fill(null);

  for (let file of files) {
    const index = files.indexOf(file);
    fs.lstat(file, (err, stats) => {
      if (err) throw new Error(err);

      allStats[index] = stats;
      const ready = allStats.every((stats) => {
        return stats;
      });
      if (ready) {
        allStats.forEach((stats, index) => {
          console.log(files[index], stats.isFile());
        });
      }
    });
  }

  
});
