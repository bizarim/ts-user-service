import 'reflect-metadata';
import { useContainer as typeormUseContainer, createConnection } from 'typeorm';
import { Container } from 'typedi';
import { createExpressServer, useContainer as routingUseContainer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
import { AsyncInterceptor } from './utill/AsyncInterceptor';
import { User } from './entity/User';


typeormUseContainer(Container);
routingUseContainer(Container);

const port = process.env.PORT || 10230;

const app = createExpressServer({
    controllers: [UserController],
    interceptors: [AsyncInterceptor],
    classTransformer: true,
    validation: true
});



createConnection({
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'root',
    password: 'qwe123!',
    database: 'test',
    entities: [
        __dirname + '/entity/*.*'
    ],
    synchronize: true,
    logging: false
}).then(async connection => {
    app.listen(port, () => {
        console.log('User service listening on port ' + port);
    });
    // const user = new User();
    // user.userName = 'abc';
    // user.uuid = 'abc';
    // user.email = 'abc';
    // await connection.manager.save(user);
    // here you can start to work with your entities
}).catch(error => console.log(error));