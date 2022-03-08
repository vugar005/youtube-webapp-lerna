const { rimrafPromise, execPromise } = require('./utils');
const fs = require('fs-extra');
const minimist = require('minimist');
const { execSync } = require('child_process');

const uiDir = 'common-ui';
const apps = ['shell', 'watch-app', 'likes-app', 'history-app'];
const ports = [4200, 4201, 4202, 4203, 3333];

const isFastMode = minimist(process.argv).fastMode;

async function  buildAndCopy() {
    refreshPorts();
    console.log('Building Common UI ...');
    await rimrafPromise(`${uiDir}/dist`);
    execPromise(`cd ${uiDir} && ng build ui`);
    await copyToApps();
}

async function copyToApps() {
    for (const appKey in apps) {
        const appName = apps[appKey];
        await rimrafPromise(`${appName}/dist`);
        if (!isFastMode) {
            await rimrafPromise(`${appName}/.angular`);
        }
        try {
            await fs.copySync(`./${uiDir}/dist`, `${appName}/node_modules`, { overwrite: true });
            console.log(`Copied common-ui to ${appName}.`)
        } catch (er) {
            console.log(`er`);
        }
    }
}

function refreshPorts() {
    console.log('Refreshing ports ...');
    for (const port in ports) {
        execSync(`npx kill-port ${port}`);
    }
}

buildAndCopy();