/*jshint esversion: 6 */
const cluster = require('cluster');
//Count the machine's CPUs
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    //cluster.schedulingPolicy = cluster.SCHED_RR;
    // Create a worker for each CPU
    for (var i = 0; i < numCPUs; i += 1) {
        cluster.fork();
    }

    // Listen for dying workers
    cluster.on('exit', function(worker) {
        console.log('Worker ${worker.process.pid} died. Spawning new worker');
        cluster.fork();
    });
} else {
    console.log('Worker ' + cluster.worker.id + " is online");
    require('./server');
}
