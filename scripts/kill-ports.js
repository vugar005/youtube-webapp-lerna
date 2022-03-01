const { execPromise } = require('./utils');

const appPorts = [3333, 4200, 4201, 4202, 4203];

async function killPorts() {
    for (const key in appPorts) {
        execPromise(`npx kill-port ${appPorts[key]}`);
        console.log(`exiting port ${appPorts[key]}`)
    }
};

killPorts();