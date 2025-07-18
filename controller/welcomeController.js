const login= require('../model/signupModel')

exports.fun1=(req,res)=>
{
     let obj = new login()
    let dt = obj.display()
    res.render('welcome.ejs',{pageTitle:"Welcome",fn:dt.fname,ln:dt.lname,age:dt.age,no:dt.contact,email:dt.email})
}
