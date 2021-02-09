const express = require('express')
const app = express()
const db = require("./queries")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/api/v1/authors", db.getAuthors)
app.get("/api/v1/authors/:id", db.getAuthorsById)
app.post("/api/v1/authors", db.createAuthors)
app.put("/api/v1/articles/:id", db.updateArticles)

app.listen(3000, () => {
    console.log('Server nyala di PORT 3000')
})