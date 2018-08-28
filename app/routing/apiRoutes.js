var peopleDataArray = require("../data/friends");

module.exports = function(app) {
    // Displays all characters
    app.get("/api/friends", function(req, res) {
        return res.json(peopleDataArray);
    });

    app.post("/api/friends", function(req, res) {
        var match;
        var initFriendVal = 100;
        var temp = 0;
        console.log(req.body);

        //iterate through available friends
        for (var i = 0; i < peopleDataArray.length; i++) {

            //iterate through scores
            for (var j = 0; j < peopleDataArray[i].scores.length; j++) {
                temp += Math.abs(peopleDataArray[i].scores[j] - req.body.scores[j]);
                console.log(temp);
            };
            if (temp < initFriendVal) {
                initFriendVal = temp;
                match = peopleDataArray[i];
                temp = 0;
            }
        }
        console.log(match.name);
        peopleDataArray.push(req.body);
        res.json(match);
    });
}