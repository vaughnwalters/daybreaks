"use strict";

console.log("Daybreaks follow bot starting up.");

const Twit = require('twit');

// Hide the key/tokens/secrets in the heroku config vars
let T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET
});

// set up a user stream
let stream = T.stream('user');

// when user follows the band, execute followed callback
stream.on('follow', followed);

function followed(eventMsg) {
  console.log("follow event working");
  let name = eventMsg.source.name;
  let screenName = eventMsg.source.screen_name;
  tweetIt(`Thanks for the follow @${screenName}! Check us out on @Spotify: http://bit.ly/td-sp
`)
}

// post tweet function
function tweetIt(txt) {
  let tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, repsonse) {
    if (err) {
      console.log("somethin broke. oops. ");
    } else {
      console.log("IT'S ALIIIIIIVE");
    }
  }
}
