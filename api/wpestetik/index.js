const path = require('path')
const fs = require('fs').promises
const fileJson = path.join(__dirname, '..', '..', 'data', 'WpEstetik.json')

module.exports = async (_, res) => {
    const data = await fs.readFile(fileJson, 'utf-8')
    const randomImages = JSON.parse(data)
    const hasil = {
        "results": randomImages
    }

    res.status(200).send(hasil)
}
