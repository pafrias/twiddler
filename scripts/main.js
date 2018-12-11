var streams, lastFeedViewed;


function User(profileLink, bio) {
  this.feed = [];
  this.avatar = profileLink; //expect string
  this.bio = bio;             //expect string
}

const setUpSession = () => {
  var setUp = {};
  setUp.home = [];
  setUp.users = {};
  setUp.users.shawndrost = new User("images/shaun.jpg", "Snowboarder, lover of life, highly resistant to feeling dizzy");
  setUp.users.sharksforcheap = new User("images/business shark.jpg", "For all your sharking needs");
  setUp.users.douglascalhoun = new User("images/fred douglas.jpg", "Totally still alive, no matter what they say");
  setUp.users.markopolo = new User("images/marco polo.jpg", "Moved from one silk road to another Q.Q");
  setUp.users.kittykat393 = new User("images/nyan-cat.png", "Baby I'M a firework");
  sessionStorage.setItem("streams", JSON.stringify(setUp));

}

if (sessionStorage.length === 0) {
  setUpSession();
};

const setUpLocal = () =>

  localStorage.setItem("visitor", {"loggedIn": false});

if (localStorage)

streams = JSON.parse(sessionStorage.streams);

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
    var $tweet = $('<article></article>');
    $(`<img src="${streams.users[tweet.user].avatar}">`).appendTo($tweet);
    $(`<a class="button user">@${tweet.user}</a>`).appendTo($tweet);
    $(`<p>${tweet.message}</p>`).appendTo($tweet);
    $(`<time>Sent ${(checkTime(tweet.created_at))}</time>`).appendTo($tweet);
    $tweet.appendTo("div.twidconsole .twidfeed");
    index -= 1;
  }
};

