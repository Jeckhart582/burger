var connection = requre("connection");

var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    selectAll: function () {
        var insertOne = "INSERT INTO burgers (burger_name, devoured) VALUES (?)" [req.body.burger];
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(res.json(result));
        });
    }

};