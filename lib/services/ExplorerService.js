class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return  explorersInMission.length
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInMission = explorersInMission.map((explorer) => explorer.githubUsername);
        return usernamesInMission
    }
    

// Part4: Get the explorer's usernames in Node



}
module.exports = ExplorerService