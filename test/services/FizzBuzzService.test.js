const FizbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Unitary test for explorer controller", () => {
    test("1) Fizzbuzz service fizzbuzz validation explorer", () => {
        const explorer = { 
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 3,
            mission: "node",
            stacks: [
                "javascript",
                "reasonML",
                "elm"
            ] 
        };
        const res1 = FizbuzzService.applyValidationInExplorer(explorer);
        expect(res1.trick).toBe("FIZZ");
        explorer.score = 5;
        const res2 = FizbuzzService.applyValidationInExplorer(explorer);
        expect(res2.trick).toBe("BUZZ");
        explorer.score = 15;
        const res3 = FizbuzzService.applyValidationInExplorer(explorer);
        expect(res3.trick).toBe("FIZZBUZZ");
        explorer.score = 1;
        const res4 = FizbuzzService.applyValidationInExplorer(explorer);
        expect(res4.trick).toBe(1);
    });
    
    test("2) Fizzbuzz service fizzbuzz validation number", () => {
        const res1 = FizbuzzService.applyValidationInNumber(3);
        const res2 = FizbuzzService.applyValidationInNumber(5);
        const res3 = FizbuzzService.applyValidationInNumber(15);
        const res4 = FizbuzzService.applyValidationInNumber(1);
        expect(res1).toBe("FIZZ");
        expect(res2).toBe("BUZZ");
        expect(res3).toBe("FIZZBUZZ");
        expect(res4).toBe(1);
    });
});