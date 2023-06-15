const express = require('express')
const app = express()
const port = 4444

function Sample(host) {
    return { name: "Hello", description: "World", url: host }
}

app.get('/api', (req, res) => {
    res.json(Sample(req.headers.host))
})

app.get('/health', (req, res) => {
    res.send('OK');
  });

var server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

module.exports = {
    Sample,
    server
};