const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unitary test for explorer controller", () => {
    test("1) Explorer service filter by mission ussage", () => {
        const result = ExplorerController.getExplorersbyMission("node");
        expect(result).not.toBeUndefined();
    });
    
    test("2) Explorer service get ammount of explorers by mission ussage", () => {
        const result = ExplorerController.getExplorersAmountbyMission("node");
        expect(result).toBe(10);
    });

    test("3) Explorer service get explorer username by mission", () => {
        const result = ExplorerController.getExplorersUsernamebyMission("node");
        expect(result).not.toBeUndefined();
    });
});