const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

/*------------------------------------------
--------------------------------------------
parse application/json
--------------------------------------------
--------------------------------------------*/
app.use(bodyParser.json());

/*------------------------------------------
--------------------------------------------
Database Connection
--------------------------------------------
--------------------------------------------*/
const conn = mysql.createConnection({
  host: 'mariadb',
  user: 'root', /* MySQL User */
  password: 'jan0815247', /* MySQL Password */
  database: 'musikwunschSite' /* MySQL Database */
});

/*------------------------------------------
--------------------------------------------
Shows Mysql Connect
--------------------------------------------
--------------------------------------------*/
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected with App...');
});

/**
 * Get All Items
 *
 * @return response()

app.get('/api/items',(req, res) => {
  let sqlQuery = "SELECT * FROM items";

  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
*/



/**
 * Get all Items from Veranstaltung
 *
 * @return response()
 */

app.get('/veranstaltung',(req, res) => {
  let sqlQuery = "SELECT * FROM veranstaltung";

  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});



/**
 * Get Single Item
 *
 * @return response()

app.get('/api/items/:id',(req, res) => {
  let sqlQuery = "SELECT * FROM items WHERE id=" + req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});

*/
app.get('/veranstaltung/:id',(req, res) => {
  let sqlQuery = "SELECT * FROM veranstaltung WHERE song_id=" + req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});



/**
 * Create New Item
 *
 * @return response()

app.post('/api/items',(req, res) => {
  let data = {title: req.body.title, body: req.body.body};

  let sqlQuery = "INSERT INTO items SET ?";

  let query = conn.query(sqlQuery, data,(err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
*/



app.post('/veranstaltung',(req, res) => {
  let data = {song_name: req.body.song_name, interpret: req.body.interpret, votinganzahl: req.body.votinganzahl, song_gespielt: req.body.song_gespielt};

  let sqlQuery = "INSERT INTO veranstaltung SET ?";

  let query = conn.query(sqlQuery, data,(err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});



/**
 * Update Item
 *
 * @return response()

app.put('/api/items/:id',(req, res) => {
  let sqlQuery = "UPDATE items SET title='"+req.body.title+"', body='"+req.body.body+"' WHERE id="+req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
*/

app.put('/veranstaltung/voteup/:id',(req, res) => {
  let sqlQuery = "UPDATE veranstaltung SET votinganzahl='"+req.body.votinganzahl+"' WHERE song_id="+req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});

app.put('/veranstaltung/gespielt/:id',(req, res) => {
  let sqlQuery = "UPDATE veranstaltung SET song_gespielt='"+req.body.song_gespielt+"' WHERE song_id="+req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});



/**
 * Delete Item
 *
 * @return response()
 */
app.delete('/api/items/:id',(req, res) => {
  let sqlQuery = "DELETE FROM items WHERE id="+req.params.id+"";

  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
      res.send(apiResponse(results));
  });
});

app.delete('/veranstaltung/:id',(req, res) => {
  let sqlQuery = "DELETE FROM veranstaltung WHERE song_id="+req.params.id+"";

  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
      res.send(apiResponse(results));
  });
});

/**
 * API Response
 *
 * @return response()
 */
function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}

/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});
