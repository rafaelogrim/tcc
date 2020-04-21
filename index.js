const {PORT, NODE_ENV} = process.env;
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path');

const routes = require('./server/config/routes');
const mongodb = require('./server/helper/mongodb');

((async () => {

    const {connection: mongooseConnection} = await mongodb();

    const app = express();

    app.use(compression());
    app.use(morgan('tiny'));
    app.use(express.json());
    app.use(bodyParser.raw({type: 'application/xml'}));

    app.use(session({
        store: new MongoStore({mongooseConnection}),
        resave: true,
        secret: 'r&3EeppYvMEP',
        saveUninitialized: true,
    }));

    app.use(passport.initialize({}));
    app.use(passport.session({}));

    app.use(cookieParser());

    app.use(helmet());

    app.use('/api', routes);

    app.use('/static/avatar', express.static(path.join(__dirname, './uploads/avatar')));
    app.use('/static/pet', express.static(path.join(__dirname, './uploads/pets')));

    app.use(express.static(path.join(__dirname, 'build')));
    app.get('/*', (req, res) => res.sendFile(path.join(__dirname, './build', 'index.html')));

    app.use((req, res) => res.status(404).end());

    app.use((err, req, res, next) => {
        const status = err.status || 200;
        delete err.status;
        const response = {error: true, payload: err};
        res.status(status).json(response).end();
    });

    app.listen(PORT, '0.0.0.0', () => console.info(`App listen on ${PORT} [${NODE_ENV}]`));

})());
