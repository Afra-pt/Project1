var userModel = require('../Model/User.model')

module.exports = {
    userLogin: async(req,res) => {
        // console.log(req.method,'////////')
        try{
           

           
                console.log('In post*******', req.data)
                let data = req.body
                let email = data.email
                console.log(data)
                
                const user = await userModel.findOne({ email });
                if (user) {
                    console.log("no user found")
                    res.redirect('/dashboard')
                   
    
                }else{
                    res.render('User_login',{'message': 'no user found'}) 
                }
    
    
                res.render('User_login',{'message': 'Error'}) 
            
           


        }
        catch(e){
            console.log(e)
             
            
            res.render('User_login',{'message': 'Error'})


        }
    },
}