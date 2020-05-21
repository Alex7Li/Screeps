var roleHarvester = require('role.harvester');

module.exports.loop = function () {
    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}
