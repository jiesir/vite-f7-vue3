export const getEnv = (env) => {
    const dotenv = require('dotenv');
    const envList = [`config/env.${env}`];
    envList.forEach((e) => {
        dotenv.config({
            path: e,
        });
    });

    for (const envName of Object.keys(process.env)) {
        let realName = (process.env)[envName].replace(/\\n/g, '\n');
        realName = realName === 'true' ? true : realName === 'false' ? false : realName;
        if (envName === 'SERVER_PROXY') {
            try {
                realName = JSON.parse(realName);
            } catch (error) { }
        }
        process.env[envName] = realName;
    }

    // console.warn(process.env)
}
