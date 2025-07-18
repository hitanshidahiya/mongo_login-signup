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

    display() {
        return data
    }
}

const { MongoClient } = require("mongodb")

const url = "mongodb://localhost:27017"

const client = new MongoClient(url)

async function insertFun(fn, ln, age, no, em, ps) {
    try {
        await client.connect()
        const db = client.db("login")
        console.log("Database created!(signup)")

        const collection = db.collection("Information")
        console.log("Collection created!(signup)")

        let arr = { fn: fn, ln: ln, age: age, no: no, em: em, ps: ps }

        let res = await collection.insertOne(arr)
        if (res) {
            return res
            console.log(res)
        }
        else {
            return 'Nothing Inserted'
        }



    } catch (err) {
        console.log("Error:" + err)
    }

}


