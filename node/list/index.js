#!/usr/bin/env node

const fs = require("fs");
const util = require("util");

// Promises Method #2
// const lstat = util.promisify(fs.lstat);

// Promises Method #3
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, files) => {
  if (err) throw new Error(err);

  for (let file of files) {
    try {
      const stats = await lstat(file);
      console.log(file, stats.isFile());
    }
    catch (err) {
      throw new Error(err);
    }
  }

  // BAD CODE TO FIND IF FILE OR DIRECTORY
  // for (let file of files) {
  //   fs.lstat(file, (err, stats) => {
  //     if (err) throw new Error(err);

  //     console.log(file, stats.isFile());
  //   });
  // }

  // Callback-Based Approach
  // const allStats = Array(files.length).fill(null);

  // for (let file of files) {
  //   const index = files.indexOf(file);
  //   fs.lstat(file, (err, stats) => {
  //     if (err) throw new Error(err);

  //     allStats[index] = stats;
  //     const ready = allStats.every((stats) => {
  //       return stats;
  //     });
  //     if (ready) {
  //       allStats.forEach((stats, index) => {
  //         console.log(files[index], stats.isFile());
  //       });
  //     }
  //   });
  // }


});

// Promises Method #1
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) reject(err);

//       resolve(stats);
//     });
//   });
// };
