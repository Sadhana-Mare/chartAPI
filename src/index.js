import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models from './models';
import routes from './routes';

import sql from './db.js';



const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

// app.use((req, res, next) => {
//   req.context = {
//    // models,
//    // me: models.line[1],
//   };
//   next();
// });

// * Routes * //

// app.use('/session', routes.session);
// app.use('/line', routes.line);
// app.use('/messages', routes.message);

// * Start * //



app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

//app.listen(4000,()=>console.log("port running"));

app.get('/result', (req, res) => {
  sql.query('SELECT * FROM result', (err, rows, fields) => {
    if (!err)
    {
      console.log("rows",rows)
        res.send(rows);
}
    else
        console.log(err);
})
  //return res.send(rows);
});
