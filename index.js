const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('data', (request) => {
    if (request.method === 'POST')
        return JSON.stringify(request.body)
})

app.use(morgan('tiny', { skip: (request) => request.method === 'POST' }))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'
    , { skip: (request) => request.method !== 'POST' }))
let persons =
    [
        {
            "name": "Arto Hellas",
            "number": "040-123456",
            "id": 1
        },
        {
            "name": "Ada Lovelace",
            "number": "39-44-5323523",
            "id": 2
        },
        {
            "name": "Dan Abramov",
            "number": "12-43-234345",
            "id": 3
        },
        {
            "name": "Mary Poppendieck",
            "number": "39-23-6423122",
            "id": 4
        }
    ]

const info = `<div>Phonebook has info of ${persons.length} people 
                    <br/>
                    <br/>${Date().toLocaleString()}<div>`

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    response.send(info)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'the name is missing '
        })
    }

    if (!body.number) {
        return response.status(400).json({
            error: 'the number is missing '
        })
    }

    if (persons.find(person => person.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: Math.round(Math.random() * 10000000)
    }
    persons = persons.concat(person)
    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})