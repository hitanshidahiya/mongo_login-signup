const login = require('../model/loginModel')

let loginEmail = loginPass = button = ''

exports.fun1 = (req, res) => {
    res.render('login.ejs', { pageTitle: "Login" })
}

exports.fun2 = async (req, res) => {
    loginEmail = req.body.email
    loginPass = req.body.password
    button = req.body.butt

    let obj = new login(loginEmail, loginPass)
    await obj.save()

    console.log(loginEmail, loginPass, button)

    switch (button) {
        case 'login':
            {
                let dt = obj.display()
                res.render('welcome.ejs', { pageTitle: "Welcome", fn: dt.fname, ln: dt.lname, age: dt.age, no: dt.contact, email: dt.email })
                break;
            }
        case 'home':
            {
                res.redirect('/')
                break;
            }
    }

}