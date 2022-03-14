import * as os from 'os';

let lineBreak = '';

export const getLineBreak = () => {
    if (lineBreak == '') {
        if (os.platform() == 'win32') {
            lineBreak = '\r\n'
        } else {
            lineBreak = '\n'
        }
    }

    return lineBreak;
};