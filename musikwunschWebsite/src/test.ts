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
setTimeout(spotifyApi.searchTracks(searchString, {limit: 7, market: 'DE'}), 100)
        .then(function (data) {
          res.send(apiResponse(data.body.tracks));
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
