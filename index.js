let express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan')
let indexRouter = require('./routes/index')
let PORT = process.env.PORT || 8080

const app = express()
app.set('json spaces', 2)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter)
app.get('*', function(req, res) {
    res.status(404).json(global.status.error)
})

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
