const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':
    {
        'birthName': 'BRUDDDAR',
        'birthLocation': 'DETROIT',
        'age': '29'
    },
    'payroll':
    {
        'birthName': 'GANNNG',
        'birthLocation': 'CINIDA',
        'age': '34'
    },
    '50 cent':
    {
        'birthName': 'MARCUS',
        'birthLocation': 'BRONX',
        'age': '46'
    },
    'unkown':
    {
        'birthName': 'uknown',
        'birthLocation': 'unkown',
        'age': 'unkown'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    console.log(rappers[rapperName])
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    }
    else {
        response.json(rappers['unkown'])
    }

})

app.listen(PORT, (request, response) => {
    console.log(`The server is now running on port ${PORT}! Go catch it blud`)
})