// Displays all characters
app.get("/api/friends", function(req, res) {
    return res.json("tables");
});

// Displays waitlist
app.post("/api/friends", function(req, res) {
    return res.json("waitlist");
});