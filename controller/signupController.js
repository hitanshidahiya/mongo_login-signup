const signup= require('../model/signupModel')

let  signupName=signupLast=signupAge=signupNum=signupEmail=signupPass=''

exports.fun1=(req,res)=>
{
    res.render('signup.ejs',{pageTitle:"Signup"})
}

exports.fun2= async (req,res)=>
{
    signupName=req.body.fn
    signupLast=req.body.ln
    signupAge=req.body.age
    signupNum=req.body.num
    signupEmail=req.body.email
    signupPass=req.body.password
    button= req.body.butt

    let obj= new signup(signupName,signupLast,signupAge,signupNum,signupEmail,signupPass,button)
    await obj.save()



    console.log(signupName,signupLast,signupAge,signupNum,signupEmail,signupPass,button)
    switch (button){
     case 'login':
        {
            res.render('login.ejs',{pageTitle:"Login"})
            break;
        }
        case 'home':
        {
            res.redirect('/')
            break;
        }

        case 'signup':
            {
                res.render('login.ejs',{pageTitle:"Login"})
            break;

            }
            }

}