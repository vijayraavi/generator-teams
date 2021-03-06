import * as path from 'path';
import * as npmRun  from 'npm-run';

export const DEPENDENCIES = [
    '../../../generators/tab',
    '../../../generators/bot',
    '../../../generators/connector',
    '../../../generators/custombot',
    '../../../generators/messageExtension',
    '../../../generators/localization'
];

export const GENERATOR_PATH = path.join(__dirname, '../../generators/app');
export const TEMP_GENERATOR_PATTERN = './temp-templates/**/*.*';
export const TEMP_TAB_GENERATOR_PATH = path.join(__dirname, '../../temp-templates/tab');
export const TEMP_BOT_GENERATOR_PATH = path.join(__dirname, '../../temp-templates/bot');
export const TEMP_MESSAGEEXTSION_GENERATOR_PATH = path.join(__dirname, '../../temp-templates/messageExtension');
export const TEMP_CONNECTOR_GENERATOR_PATH = path.join(__dirname, '../../temp-templates/connector');
export const TEMP_CUSTOMBOT_GENERATOR_PATH = path.join(__dirname, '../../temp-templates/custombot');
export const TEMP_LOCALIZATION_GENERATOR_PATH = path.join(__dirname, '../../temp-templates/localization');

export const ROOT_FILES = [
    '.deployment',
    '.gitignore',
    'deploy.cmd',
    'gulpfile.js',
    "gulp.config.js",
    'package.json',
    'README.md',
    'tsconfig-client.json',
    'tsconfig.json',
    'tslint.json',
    'webpack.config.js'
];

export const TEST_FILES = [
    'test-preprocessor.js',
    'test-setup.js',
    'test-shim.js'
];

export const MANIFEST_FILES = [
    'src/manifest/icon-color.png',
    'src/manifest/icon-outline.png',
    'src/manifest/manifest.json',
];

export const WEB_FILES = [
    'src/app/web/assets/icon.png',
    'src/app/web/index.html',
    'src/app/web/privacy.html',
    'src/app/web/tou.html',
    "src/app/web/styles/main.scss"
];

export const APP_FILES = [
    'src/app/server.ts',
    'src/app/TeamsAppsComponents.ts'
];

export async function runNpmCommand(command: string, path: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        npmRun.exec(command,{cwd: path}, 
            function (err: any, stdout: any, stderr: any) {
                if(err) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
    });
}

export const SCRIPT_FILES = 'src/app/scripts/client.ts';

export const SCHEMA_13 = 'https://developer.microsoft.com/en-us/json-schemas/teams/v1.3/MicrosoftTeams.schema.json';
export const SCHEMA_14 = 'https://developer.microsoft.com/en-us/json-schemas/teams/v1.4/MicrosoftTeams.schema.json';
export const SCHEMA_15 = 'https://developer.microsoft.com/en-us/json-schemas/teams/v1.5/MicrosoftTeams.schema.json';
export const SCHEMA_16 = 'https://developer.microsoft.com/en-us/json-schemas/teams/v1.6/MicrosoftTeams.schema.json';
export const SCHEMA_DEVPREVIEW = 'https://raw.githubusercontent.com/OfficeDev/microsoft-teams-app-schema/preview/DevPreview/MicrosoftTeams.schema.json';
