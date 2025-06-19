import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

//import morganMiddleware from "./common/middlewares/morgan.middleware.js";
//----------------------------------------------------------------
import AppConfig from './common/config/app.config.js';
// ----------------------------------------------------------------
//import isAuth from "./common/middlewares/is-auth.middleware.js";
import handleError from './common/middlewares/handle-error.middleware.js';
import UserRoute from './user/user.routes.js';




const app = express();

// app.use("/api/v1", isAuth());
app.use(handleError);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors({ origin: AppConfig.CORS_ORIGIN }));

// Add the morgan middleware
//app.use(morganMiddleware);


// Kpi Stats
//app.use(`${AppConfig.prefix}/kpi-stats`, KpiRoutes);



// Kpi Stats
//app.use(`${AppConfig.prefix}/kpi-stats`, KpiRoutes);

// AvisSpecialises Routes

app.use(`${AppConfig.prefix}/user`, UserRoute);


export default app;
