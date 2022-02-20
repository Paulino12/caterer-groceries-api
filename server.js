import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { groceries } from "./groceriesData/caterer-groceries-data.js"

dotenv.config()
const app = express()

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

// get all groceries
app.get('/', (req, res) => {
    res.status(200).json({total: groceries.length, groceries})
})

// search a grocery item
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params
    const filteredGroceries = groceries.filter((elt) => elt.productDescription.includes(searchQuery) )
    console.log(filteredGroceries)
    res.status(200).json({ total: filteredGroceries.length, filteredGroceries})
})

app.listen(PORT, () => {
    console.log(`Listening at PORT: ${PORT}`)
})
