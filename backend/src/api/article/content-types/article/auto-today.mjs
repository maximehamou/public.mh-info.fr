console.log(
  "\x1b[102m\x1b[97m\x1b[1m\x1b[3m%s\x1b[0m",
  "auto-today module is on!"
);

// Import "schedule" (for scheduled execution)
import schedule from "node-schedule";

// Import Node.js File System module
import fs from "fs";

// addEventListener("keydown", () => {
//   window.onkeydown = [alert("Key pressed!")];
// });

// Scheduling of daily execution at midnight
let scheduleExec = schedule.scheduleJob("0 0 * * *", () => {
  // Get and store date, for most locales formats
  // (to be adapted for more uncommon locales formats)
  const date = new Date()
    .toLocaleString({
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .slice(0, 10)
    .replaceAll(/([./])/g, " ")
    .split(" ")
    .reverse()
    .join()
    .replaceAll(",", "-");

  // Read schema.json file
  fs.readFile(
    "./src/api/article/content-types/article/schema.json",
    function (err, data) {
      // Check for errors
      if (err) throw err;

      // Store schema.json a JavaScript object
      const schema = JSON.parse(data);

      // Remplace default date by today date
      schema.attributes.date.default = date;

      // Converting new schema.json JavaScript object to JSON object
      const newSchema = JSON.stringify(schema);

      // Remplace schema.json content by new content
      fs.writeFile(
        "./src/api/article/content-types/article/schema.json",
        newSchema,
        (err) => {
          // Error checking
          if (err) throw err;
          console.log(
            "\x1b[102m\x1b[97m\x1b[1m\x1b[3m%s\x1b[0m",
            "schema.json updated"
          );
        }
      );
    }
  );
});
