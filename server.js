import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/connection.js';

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// app.listen(port, () => {
//    console.log(`Server running on [http://127.0.0.1:${port}]. \nPress Ctrl+C to stop the server`)
// });

connect()
   .then(() => {
      try {
         app.listen(port, () => {
            console.log(`Server running on [http://127.0.0.1:${port}]. \nPress Ctrl+C to stop the server`);
         });
      } catch (error) {
         console.log("Cannot connect to the server!");
      }
   })
   .catch((error) => {
      console.log("Invalid database connection!");
   });