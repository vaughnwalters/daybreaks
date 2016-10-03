console.log("twitter follow bot starting");

const Twit = require('twit');
const config = require('./config');

// key/secret/accesstoken/access token secret here, from the config.js. file
let T = new Twit(config);

// set up a user stream
let stream = T.stream('user');

// anytime someone follows me
// on function assigns a callback on follow
stream.on('follow', followed);

// send a reply tweet
function followed(eventMsg) {
  console.log("follow event working");
  let name = eventMsg.source.name;
  let screenName = eventMsg.source.screen_name;
  tweetIt(`I've already loved you in my mind @${screenName}. Thanks for the follow. Bum bum bum.`)
}

// post a tweet once a week 
// setInterval(tweetIt, 1000*60*60*24*7)

function tweetIt(txt) {
  let tweet = {
    // status: '#helloDarlin'
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, repsonse) {
    if (err) {
      console.log("something broke little darlin");
    } else {
      console.log("it worked little darlin");
    }
  }
}
