let express = require('express'), router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html')
})

router.get('../api', (req, res) => {
	res.redirect('https://r-images.dannsdb.id')
})

module.exports = router
