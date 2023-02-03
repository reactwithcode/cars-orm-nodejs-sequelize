// 3a
const router = require('express').Router();
// 4a
const car = require('../controller/car.controller');

// 5
// npm i sequelize-cli -g(if not yet), sequelize init ==> adjust config.json file
// 5b sequalize db:create (to create database) according to config.json

// 4c
const carClass = new car();
// 3b create route address. in router, wen can add middleware between route address and methods of class controller
// 9c adding methods from carClass
router.get("/", (req, res, next) => {

    carClass.getAllCar()
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            }) 

        })
});

router.get('/search', (req, res, next) => {
    console.log(req.query)
    carClass.search(req.query?.name)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.get('/:id', (req, res, next) => {
    carClass.getById(req.params.id)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.post('/', (req, res, next) => {
    carClass.insertData(req.body)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.put('/:id', (req, res, next) => {
    carClass.update(req.params.id, req.body)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.delete('/:id', (req, res, next) => {
    carClass.deleteData(req.params.id)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})


module.exports = router;