import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import groceriesRoutes from "./routes/groceriesRoutes.js"

dotenv.config()
const app = express()

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

// routes
app.use('/', groceriesRoutes)

app.listen(PORT, () => {
    console.log(`Listening at PORT: ${PORT}`)
})
