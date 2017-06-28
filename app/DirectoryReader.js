import fs from "fs";

export default class DirectoryReader {
    static readDirectory(dir) {
        dir = dir || "/";

        return new Promise((resolve) => {
            fs.readdir(dir, (err, files) => {
                resolve(files);
            })
        });
    }
};