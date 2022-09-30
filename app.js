const express = require("express");

const app = express();

app.get('/me', (request, response) => {
    console.log(request.method)
    response.status(200).json({
        name: 'Jose Tizon',
        age: '23',
        pais: 'Guatemala',
        verb:request.method
    })
    
})

app.post('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        hobbies:
        ['Programar','Cubos Rubik','League of Legends'],
        verb:req.method
    })
})

app.patch('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        metas:
        ['Ser desarrollador Full Stack','Crear paginas web profesionales', 'Trabajar en una empresa internacional'],
        verb:req.method
    })
})

app.put('/business',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        business:
        ['Magnet','Riot Games','G&T'],
        verb:req.method
    })
})

app.listen(8000, () => {
    console.log('Server started at port 8000')
})
