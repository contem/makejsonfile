const fs = require("fs");
const JSONStream = require("JSONStream");

/**
 * Writes an array of records into a JSON file using streaming.
 *
 * @param {Array} records - The array of JSON objects to write.
 * @param {string} file - The path to the output JSON file.
 * @returns {Promise<void>} Resolves when the file has been successfully written.
 */
async function makeJSON(records, file) {
  return new Promise((resolve, reject) => {
    const transformStream = JSONStream.stringify();
    const outputStream = fs.createWriteStream(file);

    // Handle stream errors
    outputStream.on("error", reject);
    transformStream.on("error", reject);

    // Pipe JSON stream to output
    transformStream.pipe(outputStream);

    // Write each record to the stream
    records.forEach(record => transformStream.write(record));

    // End the stream and resolve the promise when done
    transformStream.end();
    outputStream.on("finish", resolve);
  });
}

module.exports = makeJSON;