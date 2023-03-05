import clientPromise from "../lib/mongodb.js"

// initiate database connection
const client = await clientPromise
const db = client.db("caterersgroceries")

// welcome page
export const welcome = (req, res) => {
    res.send("Welcome to Caterer's Groceries")
}

// get all groceries
export const getAllGroceries = async (req, res) => {
    const groceries = await db.collection("groceries-march2023").find({}).toArray()
    res.status(200).json({total: groceries.length, groceries})
}

// search a grocery item
export const searchGroceries = async (req, res) => {
    const { searchQuery } = req.params
    let regex = new RegExp(searchQuery, 'gi')
    const foundGroceries = await db.collection("groceries-march2023").find({ productDescription: regex }).toArray()
    res.status(200).json({ total: foundGroceries.length, foundGroceries})
}