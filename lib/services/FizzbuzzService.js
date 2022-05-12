class FizbuzzService{
    static applyValidationInExplorer(explorer){
        if (explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        else if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }
        else if (explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }
        else{
            explorer.trick = explorer.score;
            return explorer;
        }        
    }

    static applyValidationInNumber(num){
        if (num%5 === 0 && num%3 === 0){
            return "FIZZBUZZ";
        }
        else if(num%3 === 0){
            return "FIZZ";
        }
        else if (num%5 === 0){
            return "BUZZ";
        }
        else{
            return num;

        }        
    }
}

module.exports = FizbuzzService;