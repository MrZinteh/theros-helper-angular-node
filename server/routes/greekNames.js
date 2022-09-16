const db = require('../../db');

exports.greekNamesGet = async (req, res, next) => {
    db.query('SELECT * FROM names', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result.rows);
        }
    });
}

exports.greekFirstNamesGet = async (req, res, next) => {
    db.query('SELECT * FROM "firstNames"', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result.rows);
        }
    });
}

exports.greekLastNamesGet = async (req, res, next) => {
    db.query('SELECT * FROM lastnames', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.send(result.rows);
        }
    });
    }

exports.greekNamesPostLastName = async (req, res, next) => {
    const name = req.query.name;
    const meaning = req.query.meaning;
    const gender = req.query.gender;
    const purpose = req.query.purpose;
    const lastMeaning = req.query.lastmeaning;
    const lastName = req.params.lastname;
    
    db.query('INSERT INTO names (name, meaning, gender, purpose, lastname, lastmeaning) VALUES($1, $2, $3, $4, $5, $6)', [name, meaning, gender, purpose, lastName, lastMeaning], (err, result) => {
        if (err) {
            console.log(err);
            res.status(403).send(err);
        }
        else {
            res.status(200).send(result.rows);
        }
    });
}

exports.greekNamesPost = async (req, res, next) => {
    const name = req.query.name;
    const meaning = req.query.meaning;
    const gender = req.query.gender;
    const purpose = req.query.purpose;
    const body = req.body;
    
    db.query('INSERT INTO names (name, meaning, gender, purpose) VALUES($1, $2, $3, $4)', [body.name, body.meaning, body.gender, body.purpose], (err, result) => {
        if (err) {
            console.log(err);
            res.status(403).send(err);
        }
        else {
            res.status(200).send(result.rows);
        }
    });
}

exports.greekNamesRemove = async (req, res, next) => {
    const name = req.query.name;
    db.query('DELETE FROM names WHERE name = $1', [name], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(200).send(result.rows);
        }
    });
}