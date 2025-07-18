module.exports = class Signup {
    constructor(fn, ln, age, no, em, ps) {
        this.fn = fn
        this.ln = ln
        this.age = age
        this.no = no
        this.em = em
        this.ps = ps
    }

    async save() {
        await insertFun(this.fn, this.ln, this.age, this.no, this.em, this.ps)
    }
}

const { MongoClient } = require("mongodb")

const url = process.env.MONGO_URL  // ✅ Recommended to use Atlas now
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

let dbInstance = null // 🔐 Global DB object for reuse

async function insertFun(fn, ln, age, no, em, ps) {
    try {
        if (!dbInstance) {
            await client.connect()
            dbInstance = client.db("login")
            console.log("Database connected (signup)")
        }

        const collection = dbInstance.collection("Information")
        console.log("Collection connected (signup)")

        let arr = { fn: fn, ln: ln, age: age, no: no, em: em, ps: ps }

        let res = await collection.insertOne(arr)
        if (res) {
            console.log(res)
            return res
        } else {
            return 'Nothing Inserted'
        }

    } catch (err) {
        console.log("Error: " + err)
    }
}
