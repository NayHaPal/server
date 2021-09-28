import { createConnection } from 'typeorm';

export const mysqlConnection = () => {
  createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'nayef',
    database: 'project',
    synchronize: true,
    entities: [__dirname + '/../models/*.model.ts'],
    // logging: true,
  })
    .then(connection => {
      // here you can start to work with your entities
      console.log(__dirname + '\\entity\\*.ts');
    })
    .catch(error => console.log(error));
};
