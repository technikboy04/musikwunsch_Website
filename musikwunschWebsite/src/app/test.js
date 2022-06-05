spotifyApi.searchTracks(
    'Love',
    function(err, data) {
      if (err) {
        res.send('Something went wrong!');
      } else {
        res.send(apiResponse(data.body));
      }
    }
  );
  

  spotifyApi.searchTracks('Love')
  .then(function(data) {
    res.send('Search by "Love"', data.body);
  }, function(err) {
    res.send('Something went wrong!');
  });