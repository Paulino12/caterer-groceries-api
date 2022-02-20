import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { groceries } from "./groceriesData/caterer-groceries-data.js"

dotenv.config()
const app = express()

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

// welcome
app.get('/', (req, res) => {
    res.send("Welcome to Caterer's Groceries")
})

// get all groceries
app.get('/groceries', (req, res) => {
    res.status(200).json({total: groceries.length, groceries})
})

// search a grocery item
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params
    let regex = new RegExp(searchQuery, 'i')
    const filteredGroceries = groceries.filter(elt => regex.test(elt.productDescription))
    res.status(200).json({ total: filteredGroceries.length, filteredGroceries})
})

app.listen(PORT, () => {
    console.log(`Listening at PORT: ${PORT}`)
})
