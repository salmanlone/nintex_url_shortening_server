const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://admin:admin@cluster0-eb8xn.azure.mongodb.net/url-shortner';

const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useNewUrlParser: true,
  useCreateIndex: true
};

export default class MongoDB {
  static Connect() {
    return new Promise((resolve, reject) => {

      if (process.env.NODE_ENV === 'test') {
        const Mockgoose = require('mockgoose').Mockgoose;
        const mockgoose = new Mockgoose(mongoose);

        mockgoose.prepareStorage()
          .then(() => {
            mongoose.connect(mongoURI, {})
              .then((res, err) => {
                if (err) return reject(err);
                resolve();
              })
          })
      } else {
        mongoose.connect(mongoURI, connectOptions)
          .then((res, err) => {
            if (err) return reject(err);
            resolve();
          })
      }
    });
  }

  static Close() {
    return mongoose.disconnect();
  }
}