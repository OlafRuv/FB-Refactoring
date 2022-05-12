const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unitary test for explorer controller", () => {
    test("1) Explorer Controller filter by mission ussage", () => {
        const result = ExplorerController.getExplorersbyMission("node");
        expect(result).not.toBeUndefined();
    });
    
    test("2) Explorer Controller get ammount of explorers by mission ussage", () => {
        const result = ExplorerController.getExplorersAmountbyMission("node");
        expect(result).toBe(10);
    });

    test("3) Explorer Controller get explorer username by mission", () => {
        const result = ExplorerController.getExplorersUsernamebyMission("node");
        expect(result).not.toBeUndefined();
    });

    test("4) Explorer Controller fizzbuzz validation number", () => {
        const res1 = ExplorerController.fizzbuzzValidationNumber(3)
        const res2 = ExplorerController.fizzbuzzValidationNumber(5)
        const res3 = ExplorerController.fizzbuzzValidationNumber(15)
        const res4 = ExplorerController.fizzbuzzValidationNumber(1)
        expect(res1).toBe("FIZZ")
        expect(res2).toBe("BUZZ")
        expect(res3).toBe("FIZZBUZZ")
        expect(res4).toBe(1)
    })
});