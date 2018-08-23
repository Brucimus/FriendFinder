var peopleDataArray = require("../data/friends");

module.exports = function(app) {
    // Displays all characters
    app.get("/api/friends", function(req, res) {
        return res.json(peopleDataArray);
    });

    app.post("/api/friends", function(req, res) {
        tableData.push(req.body);
    });
}