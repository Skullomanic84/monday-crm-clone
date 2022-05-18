const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

const url = 'https://686fe927-5aba-499f-8f12-0f66c5f28744-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token='AstraCS:mtyZlTMFBNBsevUwxwegRhtd:a0c6091872f2c4e78c79b9d81beabf6e61265135d1c818ab7d095959d359993c'


app.get('/tickets', async (req, res) => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Cassandra-Token': token,
      },
    }
    try {
      const response = await axios(`${url}?page-size=20`, options)
      res.status(200).json(response.data)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err })
    }
  })

//get request
app.post('/tickets', async (req, res) => {
    const formData = req.body.formData
  
    const options = {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'X-Cassandra-Token': token,
        'Content-Type': 'application/json',
      },
      data: formData,
    }
  
    try {
      const response = await axios(url, options)
      res.status(200).json(response.data)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err })
    }
  })



app.listen(PORT, () => console.log('server running on PORT ' + PORT))