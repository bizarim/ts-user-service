import 'reflect-metadata';
import { useContainer as typeormUseContainer, createConnection } from 'typeorm';
import { Container } from 'typedi';
import { createExpressServer, useContainer as routingUseContainer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
import { AsyncInterceptor } from './utill/AsyncInterceptor';


typeormUseContainer(Container);
routingUseContainer(Container);

const port = process.env.PORT || 10230;

const app = createExpressServer({
    controllers: [UserController],
    interceptors: [AsyncInterceptor],
    classTransformer: true,
    validation: true
});

app.listen(port, () => {
    console.log('User service listening on port ' + port);
});

// createConnection()
// .then(async connection => {
//     console.log("Database connection started successfully");
// })
// .catch(error => console.log(error))