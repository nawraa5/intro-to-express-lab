const express = require("express") //importing express package
const app = express() // creates a express application






app.use(express.static('public'));


app.get('/test',(request,response)=>{
    response.send('<p>Success!</p>')

})




app.get('/',(request,response)=>{
    response.send('<h1>Welcome to my application Nawraa</h1>')
})


app.get('/about',(request,response)=>{
    response.sendFile(__dirname + '/views/about.html')

})



app.listen(3000, ()=>{
    console.log('server running on port 3000')
})


