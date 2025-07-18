let buttonVal=''
exports.fun1=(req,res)=>
{
    res.render('page1.ejs',{pageTitle:"Home"})
}

exports.fun2=(req,res)=>
{
    buttonVal= req.body.butt
    console.log(buttonVal)

    switch(buttonVal)
    {
        case 'Signup':
            res.redirect('/signup');
            break;
        case 'Login':
            res.redirect('/login');
            break;
        default:
            res.redirect('/');   
    }

}