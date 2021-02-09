const {Client} = require('pg')
const client = new Client({
    user: "krisnachy",
    host: "localhost",
    database: "nodedb",
    password: "aku888",
    port: "5432"
})
client.connect()

// const getArticles = (req, res) => {
//     client.query("SELECT * FROM articles ORDER BY id DESC", (err, results) => {
//         if (err)
//             throw(err)
//         res.status(200).json(results.rows)
//     })
// }

// const getArticlesById = (req, res) => {
//     const id = parseInt(req.params.id);
//     client.query("SELECT * FROM articles WHERE id = $1", [id], (err, results) => {
//         if (err)
//             throw (err)
//         res.status(200).json(results.rows)
//     })
// }

const getAuthors = (req, res) => {
    client.query('SELECT * FROM authors ORDER BY id DESC', (err, results) => {
        if (err)
            throw(err)
        res.status(200).json(results.rows)
    })
}

const createAuthors = (req, res) => {
    const {name, email} = req.body

    client.query('INSERT INTO authors (name, email) VALUES ($1, $2)', [name, email], (err, result) => {
        if (err)
            throw(err)
        res.status(200).json(result.rows)
    })

}

const getAuthorsById = (req, res) => {
    const id = parseInt(req.params.id);
    client.query('SELECT * FROM authors WHERE id = $1', [id], (err, results) => {
        if (err)
            throw (err)
        res.status(200).json("Berhasil menambah data")
    })
}

const updateArticles = (req, res) => {
    const id = parseInt(req.params.id)
    //destrukturing
    const {title, content, author} = req.body
    client.query('UPDATE articles SET title = $1, content = $2, author = $3 WHERE id = $4', [title, content, author, id], (err, result) => {
        if (err)
            throw(err)
        res.status(200).json("Berhasil mengubah data")
    })
}

module.exports = {getAuthors, createAuthors, getAuthorsById, updateArticles}