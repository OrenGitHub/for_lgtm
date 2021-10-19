require('coffeescript/register')
var Netmask = require('netmask').Netmask

// var Netmask = require('netmask').Netmask
var block = new Netmask(random_ip);
block.base;                     // 10.0.0.0
block.mask;                     // 255.240.0.0
block.bitmask;                  // 12
block.hostmask;                 // 0.15.255.255
block.broadcast;                // 10.15.255.255
block.size;                     // 1048576
block.first;                    // 10.0.0.1
block.last;                     // 10.15.255.254

console.log('[ - ] >> INFECTED:');

process.stdout.write("[ - ] range: ");
process.stdout.write(block.first);
process.stdout.write(" -> ");
console.log(block.last);

process.stdout.write('[ - ] is 31.5.5.5 in that block?  ');
console.log(block.contains('31.5.5.5'));

var rand_digit = Math.floor(Math.random()*9);
var random_ip = "031.5."+rand_digit+".5"

process.stdout.write('[ - ] is 031.5.?.5 in that block? ');
console.log(block.contains(random_ip));
