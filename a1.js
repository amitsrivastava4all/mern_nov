const events = require('events');
const eventEmitter = new events.EventEmitter();
const os = require('os');

console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.homedir());
console.log(os.cpus());
//os.networkInterfaces();


// Event Register (Hook)
eventEmitter.on('ring',(val)=>{
    console.log('Ring Event Call ',val);
});

//eventEmitter.addListener

eventEmitter.on('ring',()=>{
    console.log('Ring Event Call 2 ');
});
// MAX 10

eventEmitter.setMaxListeners(20);

eventEmitter.once('onetime',()=>{
    console.log('call only once');
})

// Event Fire
eventEmitter.emit('ring','This is My Pass Value');
//eventEmitter.off('ring')
//eventEmitter.removeListener('ring'); // UnHook
// eventEmitter.emit('ring','This is My Second Value');
// eventEmitter.emit('onetime','Call First time');
// eventEmitter.emit('onetime','Call Second time');
// eventEmitter.removeListener('ring'); // UnHook
