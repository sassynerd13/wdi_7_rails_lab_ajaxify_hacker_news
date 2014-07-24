Handlebars.registerHelper('formatScore', function(score) {
  if(score > 1){
      return score + ' points';
  } else {
    return score + ' point';
  }
});

Handlebars.registerHelper('timeAgoInWords', function(datetimeString) {
  //time ago in seconds
  var timeAgo = (new Date() - new Date(datetimeString)) / 1000;
  if(timeAgo < 120) {
    return "1 minute ago";
  } else if(timeAgo < 3600){
    return Math.floor(timeAgo / 60) + ' minutes ago';
  } else if(timeAgo < 7200) {
    return "1 hour ago";
  } else if(timeAgo < 86400) {
    return Math.floor(timeAgo / 60) + ' hours ago';
  } else if(timeAgo < 172800) {
    return "1 day ago";
  } else if(timeAgo < 86400) {
    return Math.floor(timeAgo / 60) + ' days ago';
  }
});
