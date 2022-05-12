const Reader = require("./../../lib/utils/Reader")

describe("Unitary test for reader util", () => {
    test("1) Read Json file", () => {
        const explorers = Reader.readJsonFile("explorers.json")
        expect(explorers).not.toBeUndefined()
    })
})