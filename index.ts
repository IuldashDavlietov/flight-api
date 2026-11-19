import express from 'express';
import { env } from './src/configs/env';
import { dbConnection } from './src/configs/dbConnection';
import errorHandlerMiddleware, {notFound} from './src/middlewares/errorHandler.middleware';
import queryHandler from './src/middlewares/queryHandler.middleware';
import loggerMiddleware from './src/middlewares/logger.middleware';

const app = express();
app.use(express.json());

// DB:
dbConnection();

// queryHandler
app.use(queryHandler)

// logger
app.use(loggerMiddleware)






// Not found handler
app.all("/*splat", notFound);
// Error handler
app.use(errorHandlerMiddleware)

app.listen(env.PORT || 8000, () => console.log("Running on port: 8000"))