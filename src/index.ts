import MongoDB from './db/index';
import App from './app';

const PORT = process.env.PORT || 5000;

MongoDB.Connect().then(() => {
    new App().GetServer().listen(PORT, () => {
        console.log('Listening on port: ' + PORT);
    });
});