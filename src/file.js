import FS from "fs";

export const readFile = () => {
    return new Promise((resolve,reject) => {
        FS.readFile(process.cwd() + '/mock/test.json',(err,data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};