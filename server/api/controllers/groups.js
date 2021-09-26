const express = require('express');
const router = express.Router();

const Groups = require('../models/groups')

router.get('/', async (req, res) => {
    try {
        console.log('hi')
        const groups = await Groups.all
        
        res.json({groups})
    } catch(err) {
        res.status(500).json({err})
    }
})

router.get('/:name', async (req, res) => {
    try {
        console.log(req.params.name)
        const groups = await Groups.findByName(req.params.name)
        console.log('This is ' + groups)
        res.json(groups)
    } catch(err) {
        res.status(404).json({err})
    }
})

module.exports = router;