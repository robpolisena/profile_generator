const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (ansName) => {
  rl.question('What\'s an activity you like doing? ', (ansActivity) => {
    rl.question('What do you listen to while doing that? ', (ansListen) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (ansMeal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (ansFood) => {
          rl.question('Which sport is your absolute favourite? ', (ansSport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (ansSuper) => {
              console.log(`${ansName} loves listening to ${ansListen} while ${ansActivity}, devouring ${ansFood} for ${ansMeal},
              prefers ${ansSport} over any other sport, and is amazing at ${ansSuper}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});