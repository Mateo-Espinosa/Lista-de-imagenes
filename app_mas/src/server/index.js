const express = require ('express')
const cors = require ('cors')
const app = express()


app.use(cors())
app.use(express.json())
app.get('/imagenes', (req, res) => {
    const data = { name: "MAS", age: 30}
    res.json(data)
});

const port = process.env.PORT || 3000

app.listen(port,()=> {
    console.log(`Servidor ejecutándose:http://localhost:${port}`)
});