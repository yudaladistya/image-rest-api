const randomImages = require('./api/')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const outputFile = path.join(__dirname, 'data/', 'data.json')
const baseUrl = "https://r-images.dannsdb.id"
