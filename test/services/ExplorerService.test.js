// Clase anterior con la que obtenemos los explorers
const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const explorers = Reader.readJsonFile("explorers.json");

describe("Unitary test for explorer service", () => {
    test("1) Explorer service filter by mission ussage", () => {
        result = ExplorerService.filterByMission(explorers, "node");
        expect(result).not.toBeUndefined()
    })
    
    test("2) Explorer service get ammount of explorers by mission ussage", () => {
        result = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(result).toBe(10)
    })

    test("3) Explorer service get explorer username by mission", () => {
        result2 = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(result2).not.toBeUndefined()
    })
})


