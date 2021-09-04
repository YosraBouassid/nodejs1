const fs = require('fs');

try {
    // read contents of the file
    const data = fs.readFileSync(process.argv[2], 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/).length-1;
 console.log(lines);
    // print all lines
  //  lines.forEach((line) => {
      //  console.log(line);
    //});
} catch (err) {
    console.error(err);
}
