var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b3ab8cdd75e44002b68f811f0ead67a7';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
