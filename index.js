var express = require('express')
var app = express()

app.get('/', (req, res)=>{
    res.send('Hello Andews!!!')
})

app.listen(8000, ()=>{
    console.log('App listening on port 8000...')
})
