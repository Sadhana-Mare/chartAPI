import { Router } from 'express';

const router = Router();

router.get('/result', (req, res) => {
  mysqlConnection.query('SELECT * FROM result', (err, rows, fields) => {
    if (!err)
    {
      console.log("rows",rows)
        res.send(rows);
}
    else
        console.log(err);
})
  return res.send(rows);
});




export default router;
