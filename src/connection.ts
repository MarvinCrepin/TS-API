const mongoose = require('mongoose');

export class Connect {
    connect() {
    mongoose
  .connect('mongodb://127.0.0.1:27017/wilderdb', {
    autoIndex: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((err: string) => console.log(err));
}
}