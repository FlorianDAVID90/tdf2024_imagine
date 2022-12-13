const pool = require('../../db')
const queries = require('./queries');

exports.getAllCoureurs = (req, res) => {
  pool.all(queries.getAllCoureursFromEquipe, [req.params.id], (error, results) => {
    if(error) throw error
    console.log(results)
    return res.send({status: 1, data: results})
  });
}

exports.getAllEtapes = (req, res) => {
  pool.all(queries.getAllEtapes, [req.params.id], (error, results) => {
    if(error) throw error
    console.log(results)
    return res.send({status: 1, data: results})
  })
}

exports.getAllEquipes = (req, res) => {
  pool.all(queries.getAllTeams, [req.params.id], (error, results) => {
    if(error) throw error
    console.log(results)
    return res.send({status: 1, data: results})
  })
}