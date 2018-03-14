$(function() {
  let apiKey = "76550510c06b419b94ba33f1b1fc7f3e";
  let url = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".row").empty();
    for (let i=0; i<data.results.length; i++) {
      let movie = data.results[i];
      let html = '<div class="col-4">';
      html = html + '<div class="card">';
      html = html + '<img class="card-img-top" src="' + movie.multimedia.src + '">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title">' + movie.display_title + '</h4>';
      html = html + '<p class="card-text">' + movie.summary_short + '</p>';
      html = html + '</div></div></div>';
      $(".row").append(html);
    }
    $(".row").fadeIn(2000);
  });
});
