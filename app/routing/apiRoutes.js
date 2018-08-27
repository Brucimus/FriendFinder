var peopleDataArray = require("../data/friends");

module.exports = function(app) {
    // Displays all characters
    app.get("/api/friends", function(req, res) {
        return res.json(peopleDataArray);
    });

    app.post("/api/friends", function(req, res) {
        var match;
        var temp = 0;
        console.log(req.body);
        for (var i = 0; i < peopleDataArray.length; i++) {
            for (var j = 0; j < peopleDataArray[i].scores.length; j++) {
                temp += peopleDataArray[i].scores[j] - req.body.scores[j];
                console.log(temp);
            };
        }
        peopleDataArray.push(req.body);
        res.json(true);
    });
}