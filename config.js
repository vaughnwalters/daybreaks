"use strict";

module.exports = {
  consumer_key:         process.env.CONSUMER_KEY ||'Es2Dqd3YUEkunYIIMobceyahc',
  consumer_secret:      process.env.CONSUMER_SECRET || 'vY8RUWVJMWuvAtMnhytIf2cb5TUyv2VTvZmcHCSOjZFOauuYfD',
  access_token:         process.env.ACCESS_TOKEN || '4101731901-CIUQGVzrQiiiwmOqiiyTQUt45SK1zH8iRpszweV',
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET || 'PImAzc6Ji4mTJiwLpkyrxTCi3k8xXaTCRrvvMOFXjoISB',
}


// if I want to use the config.js file instead of hardcoding in the bot.js:
// const config = require('./config');
// let T = new Twit(config);
