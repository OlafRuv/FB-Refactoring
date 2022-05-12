const ExplorerService = require("./lib/services/ExplorerService");
const FizbuzzService = require("./lib/services/FizzbuzzService");
const Reader = require("./lib/utils/Reader")

// * Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json")

// * Part 2: Get the quantity of explorers names in node
console.log("*************************************************")
console.log(ExplorerService.getAmountOfExplorersByMission(explorers,"node"))

// * Part4: Get the explorer's usernames in Node
console.log("*************************************************")
console.log(ExplorerService.getExplorersUsernamesByMission(explorers,"node"))

// * Part 5: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO
explorersInNode = ExplorerService.filterByMission(explorers,"node")
const explorersFizzbuzz = explorersInNode.map((explorer) => FizbuzzService.applyValidationInExplorer(explorer))
console.log("*************************************************")
console.log(explorersFizzbuzz)


console.log("*************************************************")