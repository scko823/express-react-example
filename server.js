let bodyParser = require('body-parser')
let express = require('express')
let app = express()
let path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/form', (req,res)=>{
	console.log(req.body)
	res.setHeader('Content-Type','text/html')
	res.write(`<h1>Random number ${Math.random()}<h1>`)
	res.write(`Here is your JSON ${JSON.stringify(req.body)}`)
	res.end()
})

app.listen(3000)