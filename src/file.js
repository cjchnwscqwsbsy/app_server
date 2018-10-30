import FS from "fs";

export const readFile = () => {
    return FS.readFileSync(process.cwd() + '/mock/test.json');
};