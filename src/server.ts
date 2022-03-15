const application = require('./app');
const port: number = 5000;
//  DB
import { Connect } from './connection'

const connect = new Connect
connect.connect()
// Server Starting :3000
application.listen(port, () => console.log(`Server started on ${port}`));
