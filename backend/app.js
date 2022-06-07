const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const Spotify = require('spotify-web-api-node');
const request = require('request'); // "Request" library

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
  host: '10.0.0.3',
  user: 'root', /* MySQL User */
  password: 'jan0815247', /* MySQL Password */
  database: 'musikwunschSite' /* MySQL Database */
});

/*------------------------------------------
--------------------------------------------
Shows Mysql Connect
--------------------------------------------
--------------------------------------------*/
conn.connect((err) => {
  if (err) throw err;
  console.log('Mysql Connected with App...');
});

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});





app.get('/veranstaltung', (req, res) => { 
let sqlQuery = "SELECT * FROM veranstaltung";

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});


app.get('/song_gespielt', (req, res) => {
let sqlQuery = "SELECT * FROM veranstaltung where song_gespielt=1";

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});


app.get('/veranstaltung/:id', (req, res) => {
  let sqlQuery = "SELECT * FROM veranstaltung WHERE song_id=" + req.params.id;
  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

app.post('/veranstaltung', (req, res) => {
  let data = { 
    song_name: req.body.song_name, 
    interpret: req.body.interpret, 
    votinganzahl: req.body.votinganzahl, 
    song_gespielt: req.body.song_gespielt, 
    bild_url: req.body.bild_url};

  let sqlQuery = "INSERT INTO veranstaltung SET ?";

  let query = conn.query(sqlQuery, data, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

app.post('/veranstaltung/addSong', (req, res) => {
  let data = { 
    song_name: req.body.song_name, 
    interpret: req.body.interpret, 
    votinganzahl: 1, 
    song_gespielt: 0, 
    bild_url: req.body.bild_url };

  var song_name_check = req.body.song_name;

  conn.query("SELECT song_name FROM veranstaltung WHERE song_name = '" + song_name_check + "'", function (err, result, field) {
    if (result.length === 0) {
      let sqlQuery = "INSERT INTO veranstaltung SET ?";

      let query = conn.query(sqlQuery, data, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
      });

    } else {
      let sqlQuery = "SELECT votinganzahl FROM veranstaltung WHERE song_name= '" + song_name_check + "'";

      let query = conn.query(sqlQuery, (err, results) => {
        if (err) throw err;
        var votinganzahl = results[0].votinganzahl;
        votinganzahl++;
        let sqlQuery = "UPDATE veranstaltung SET votinganzahl='" + votinganzahl + "' WHERE song_name= '" + song_name_check + "'";

        let query = conn.query(sqlQuery, (err, results) => {
          if (err) throw err;
          res.send(apiResponse(results));
        });

      });

    }
  });
});

app.put('/veranstaltung/voteup/:id', (req, res) => {
  let sqlQuery = "UPDATE veranstaltung SET votinganzahl='" + req.body.votinganzahl + "' WHERE song_id=" + req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

app.put('/veranstaltung/gespielt/:id', (req, res) => {
  let sqlQuery = "UPDATE veranstaltung SET song_gespielt='" + req.body.song_gespielt + "' WHERE song_id=" + req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

app.delete('/veranstaltung/:id', (req, res) => {
  let sqlQuery = "DELETE FROM veranstaltung WHERE song_id=" + req.params.id + "";
  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

app.get('/spotify:searchString', (req, res) => {
  var searchString = req.params.searchString;
  var spotifyApi = new Spotify({
    clientId: 'e7baf29ef3714ff5a450cdb9d086ad93',
    clientSecret: '6a0c2fc5b1da4c759415e76d27f714ae',
    redirectUri: 'http://localhost/test'
  });
  var client_id = 'e7baf29ef3714ff5a450cdb9d086ad93';
  var client_secret = '6a0c2fc5b1da4c759415e76d27f714ae';

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var token = body.access_token;
      spotifyApi.setAccessToken(token);

      spotifyApi.searchTracks(searchString, {limit: 7, market: 'DE'})
        .then(function (data) {
          res.send(apiResponse(data.body.tracks.items)); 
          /** 
          res.send(apiResponse(data.body.tracks.items[0].album.images[0].url));
          res.send(apiResponse(data.body.tracks.items[0].artists[0].name));
          res.send(apiResponse(data.body.tracks.items[0].name));
        */
        }, function (err) {
          console.error(err);
        });
    }
  });
});
/**
 * API Response
 *
 */
function apiResponse(results) {
  return JSON.stringify({ "status": 200, "error": null, "response": results });
}
/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(3000, () => {
  console.log('Server started on port 3000...');
});
