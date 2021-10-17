let express = require('express'), router = express.Router()

router.get('r-images.dannsdb.id', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html')
})

module.exports = router
