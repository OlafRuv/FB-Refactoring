const ExplorerService = require("./../services/ExplorerService");
const FizbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{
    static getExplorersbyMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorers,mission);
        return explorersInMission;
    }

    static getExplorersUsernamebyMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsernameInMission = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return explorersUsernameInMission;
    }

    static getExplorersAmountbyMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersAmountInMission = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return explorersAmountInMission;
    }
}

module.exports = ExplorerController;