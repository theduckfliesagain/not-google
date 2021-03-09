const resultsData = require('../data');

class Result {
    constructor(data){
        this.id = data.id;
        this.heading =  data.heading;
        this.url = data.url;
        this.desc = data.desc;
    }

    static get all() {
        const results = resultsData.map(result => new Result(result));
        return results;
    }

    static get random() {
        const randID = Math.floor(Math.random() * resultsData.length);
        console.log(randID)
        return resultsData[randID];
    }

    static findByID(id) {
        try {
            const resultData = resultsData.filter(result => result.id === id)[0];
            const result = new Result(resultData);
            return result;
        } catch (error) {
            throw new Error(`No result with that ID. Error: ${error}`)
        }
    }

}

module.exports = Result;