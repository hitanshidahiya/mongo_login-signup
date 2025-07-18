require('dotenv').config()

const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch(err => console.error("❌ Connection error:", err))


module.exports = class login {
    constructor(email, pass) {
        this.email = email
        this.pass = pass

        this.fname = ''
        this.lname = ''
        this.age = ''
        this.contact = ''
    }

    async save() {
        let data = await finding(this.email, this.pass)

        if (data !== '0 Data') {
            this.fname = data.fn
            this.lname = data.ln
            this.age = data.age
            this.contact = data.no
        }
    }

    display() {
        return {
            fname: this.fname,
            lname: this.lname,
            age: this.age,
            contact: this.contact,
            email: this.email
        }
    }
}

const { MongoClient } = require("mongodb")
const url = process.env.MONGO_URL

// ✅ Reuse MongoDB connection
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

let dbInstance = null // 🔐 singleton database instance

async function finding(email, pass) {
    try {
        if (!dbInstance) {
            await client.connect()
            dbInstance = client.db("login")
            console.log("Database connected and stored (login)")
        }

        const collection = dbInstance.collection("Information")
        console.log("Collection created!(login)")

        let query = { em: email, ps: pass }
        console.log(query)

        let res = await collection.findOne(query)
        if (res) {
            console.log(res)
            return res
        } else {
            console.log("0 Data")
            return "0 Data"
        }

    } catch (err) {
        console.error(err)
    }
}
