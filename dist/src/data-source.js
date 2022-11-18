"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    'type': "mysql",
    'host': "127.0.0.1",
    'username': "root",
    'password': "shmily",
    'database': "dbTest",
    'synchronize': false,
    'logging': false,
    'migrationsRun': true,
    'entities': ["dist/src/entity/*.js"],
    'migrations': ["dist/src/migrations/*.js"]
});
//# sourceMappingURL=data-source.js.map