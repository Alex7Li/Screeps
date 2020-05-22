let spawnScript = {
    run : function(){
        Object.keys(Game.spawns).forEach(function (name) {
            let spawn = Game.spawns[name];
            let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');

            if (harvesters.length < 2) {
                let newName = 'Harvester' + Game.time;
                console.log('Spawning new harvester: ' + newName);
                spawn.spawnCreep([WORK, CARRY, MOVE], newName,
                    {memory: {role: 'harvester'}});
            }

            // display information
            if (spawn.spawning) {
                let spawningCreep = Game.creeps[spawn.spawning.name];
                spawn.room.visual.text(
                    '🛠️' + spawningCreep.memory.role,
                    spawn.pos.x,
                    spawn.pos.y,
                    {align: 'left', opacity: 0.8});
            }
        });
    }
}
module.exports = spawnScript;
