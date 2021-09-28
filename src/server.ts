process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import 'reflect-metadata';
import App from '@/app';
import { AuthController } from '@controllers/auth.controller';
import { IndexController } from '@controllers/index.controller';
import { UsersController } from '@controllers/users.controller';
import { UploadController } from '@controllers/upload.controller';
import validateEnv from '@utils/validateEnv';
import { ColumnsController } from './controllers/colums.controller';
import { ProcessController } from './controllers/process.controller';
import { OprationsController } from './controllers/operation.controller';

validateEnv();

const app = new App([AuthController, IndexController, UsersController, UploadController, ColumnsController, ProcessController, OprationsController]);
app.listen();
