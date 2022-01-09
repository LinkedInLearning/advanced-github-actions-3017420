// print the platform and the node version
console.log('Platform: ', process.platform);
console.log('Node    : ', process.version);

// read the environment
var env = process.env;

//  print each environment variable
Object.keys(env).forEach(function(key) {
  console.log(key + ' = ' + env[key]);
});
