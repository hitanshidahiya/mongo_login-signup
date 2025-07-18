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
        return{
            fname: this.fname,
            lname: this.lname,
            age: this.age,
            contact: this.contact,
            email: this.email
        }
    }

}

const { MongoClient } = require("mongodb")
const url = "mongodb://localhost:27017"

const client = new MongoClient(url)

async function finding(email, pass) {

    try {

        await client.connect()

        const db = client.db("login")
        console.log("Database created!(login)")

        const collection = db.collection("Information")
        console.log("Collection created!(login)")

        let query = { em:email, ps:pass }
        console.log(query)

        let res = await collection.findOne(query)
        if (res) {
            console.log(res)
            return res
        }
        else {

            console.log(" 0 Data")
            return "0 Data";
        }

    } catch (err) {
        console.error(err)
    }

}


