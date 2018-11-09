import FS from "fs";

export const readFile = (file) => {
    return new Promise((resolve,reject) => {
        FS.readFile(process.cwd() + `/mock/${file}.json`,(err,data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};