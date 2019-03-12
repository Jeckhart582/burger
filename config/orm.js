var connection = require("../config/connection.js");

//Use this function to generate "?" for mySQL
function questionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};
//Function to help with mySQL syntax
function sqlMe(obj) {
    var arr = [];

    for (var key in obj) {
        arr.push(key + "=" + obj[key]);
    }
    return arr.toString();
};

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });

    },

    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += sqlMe(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;