let express = require('express'), router = express.Router(), favicon = require('serve-favicon')
router.use(favicon(process.cwd() + '/public/favicon.ico'))

router.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html')
})

module.exports = router