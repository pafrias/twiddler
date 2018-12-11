
var lastFeedViewed = null;

const checkTime = (date) => {
  now = (Date.now() - Date.parse(date)) / 1000;
  now = Math.floor(now);
  if (now < 60) {
    return now + ' seconds ago';
  } else if (now < 3600) { // seconds in an hour
    now = Math.floor(now / 60);
    return now + ' minutes ago';
  } else if (now < 86400) { // seconds in a day
    now = Math.floor(now / 3600);
    return now + ' hours ago';
  } else {
    now = Math.floor(now / 86400);
    return now + ' days ago';
  }
}

const update = (feedRequest=lastFeedViewed) => {

  lastFeedViewed = feedRequest;

  $("div.twidconsole .twidfeed").html('');

  var index = (feedRequest === 'home') ? streams[feedRequest].length - 1 : streams.users[feedRequest].feed.length - 1;
  while(index >= 0){
    var tweet = (feedRequest === 'home') ? streams[feedRequest][index] : streams.users[feedRequest].feed[index];
    var $tweet = $('<section></section>');
    $('<a class="button user">@' + tweet.user + '</a>').appendTo($tweet);
    $('<p>' + tweet.message + '</p>').appendTo($tweet);
    $('<time>Sent ' + (checkTime(tweet.created_at)) + '</time>').appendTo($tweet);
    $tweet.appendTo("div.twidconsole .twidfeed");
    index -= 1;
  }
};

