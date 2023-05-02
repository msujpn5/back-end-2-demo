const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const {getMovies, addMovie, updateMovie, deleteMovie} = require('./controller.js') //pull functions from the controller file

app.get('/api/movies', getMovies)
app.post('/api/movies', addMovie)
app.put('/api/movies/:id', updateMovie)
app.delete('/api/movies/:id', deleteMovie)

app.listen(4004, () => {
    console.log('Binging movies on port 4004')
})

