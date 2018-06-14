
const  express = require('express')
const app = express()

function runFirst() {
    app.get('/test',(req, res)=> {
        res.status(200).json({body:"test"})
    })
    const onListen = () => {
        console.log("LISTENING to port 5000")
    }
    app.listen(5000, onListen)
}
function runSecond() {
    app.get('*',(req, res)=> {
        res.status(200).json({body:"something happen"})
    })
    const onListen = () => {
        console.log("LISTENING to port 3000")
    }
    app.listen(3000, onListen)
}
runFirst()
runSecond()

