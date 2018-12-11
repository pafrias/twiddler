/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// utility function for adding tweets to our data structures

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].feed.push(newTweet);
  streams.home.push(newTweet);
  sessionStorage.setItem("streams", JSON.stringify(streams));
};

// utility function
var randomElement = function(collection){
  if (Array.isArray(collection)) {
    var randomIndex = Math.floor(Math.random() * collection.length);
    return collection[randomIndex];
  } else {
    var keys = Object.keys(collection);
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
    return randomKey;
  }
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(streams.users);
  tweet.message = randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);
};

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 5000);
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];


const emulateContent = (input) => {
  if (input === true) {
    for(var i = 0; i < 10; i++){
      generateRandomTweet();
    }
  }
  scheduleNextTweet();
}

emulateContent(streams.home.length === 0);




// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;

  addTweet(tweet);
};
