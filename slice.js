const address = 'andorkilla';
const part = address.slice(2, 5);
console.log(part);


//---------split-------------
const sentence = 'Zillu is a good and hardworking person';
// console.log(sentence.split(' '));
// console.log(sentence.split('a') );


const friendsStr = 'Rahim, Fahim, Sahim, Tayeeb, Tushar';
const friends = friendsStr.split(',');
console.log(friends);


// ----------join-------------------
const realFriend = [ 'Rahim', 'Fahim', 'Sahim', 'Tayeeb', 'Tushar' ];
// console.log(realFriend.join());
// console.log(realFriend.join('|'));
console.log(realFriend.join('-'));



