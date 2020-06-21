#!/usr/bin/env node

const fs = require("fs");
const chalk = require("chalk");
const path = require("path");
// const util = require("util");

// Promises Method #2
// const lstat = util.promisify(fs.lstat);

// Promises Method #3
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, files) => {
  if (err) throw new Error(err);

  // GOOD SOLUTION
  // =============================================
  const statPromises = files.map(file => {
    return lstat(path.join(targetDir, file));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) console.log(chalk.white(files[index]));
    else console.log(chalk.bold.cyanBright(files[index]));
  }
  // =============================================

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

  // Initial approach using promises
  // for (let file of files) {
  //   try {
  //     const stats = await lstat(file);
  //     console.log(file, stats.isFile());
  //   }
  //   catch (err) {
  //     throw new Error(err);
  //   }
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
