// @flow

const fs = require("fs");

type nodeResultCallback = (
    err: Object | null | void,
    result: number | null | void
) => void;

const computeMaxSum = (filePath: string, callback: nodeResultCallback) => {
    return fs.readFile(filePath, 'utf8', function (err, data) {
        if(err) throw err;

        // Set bi-dimensional array
        const file = data.split('\n') // Split lines
            .filter(row => row !== "") // Filter row
            .map(row => row.split(" ").map(num => parseInt(num))); // Parse string number to integer

        // Let's go from the bottom to the top
        for (let i = file.length - 1; i > 0; i--) {
            let actualRow = file.pop(), // Delete actual row

                row = file[i - 1]; // Get Next Row

            for (let j = 0; j < actualRow.length; j++) {
                let a = actualRow[j] + row[j], // Set choice 1
                    b = actualRow[j + 1] + row[j]; // Set choice 2
                row[j] = a > b ? a : b; //
            }
        }

        callback(err, file[0][0]);
    });
};

export default computeMaxSum;
