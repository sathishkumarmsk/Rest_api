const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber.js')

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })

    }
    
    

})

router.get('/:id', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedChannel: req.body.subscribedChannel
    }) 

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

router.post('/', (req, res) => {

})

router.patch('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router