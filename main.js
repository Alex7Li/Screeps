import Spawn from '/spawn';
let roleHarvester = require('role.harvester');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');

module.exports.loop = function () {

    /*
     * Clear memory of dead creeps
     */
    Object.keys(Memory.creeps).forEach(function (name) {
        if (!(name in Game.creeps)) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    });

    /*
     * Create creeps if desired
     */
    Spawn.run();

    /*
     * Perform action for all creeps
     */
    Object.keys(Game.creeps).forEach(function (name) {
        let creep = Game.creeps[name];
        switch (creep.memory.role) {
            case 'harvester':
                roleHarvester.run(creep);
                break;
            case 'upgrader':
                roleUpgrader.run(creep);
                break;
            case 'builder':
                roleBuilder.run(creep);
                break;
            default:
                creep.say("I have no identity");
        }
    });
}
