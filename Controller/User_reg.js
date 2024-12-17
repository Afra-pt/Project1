var userModel = require('../Model/User.model')

module.exports = {
    userRegister: async(req,res) => {

        try{

            let data = req.body
            console.log(data)
             
            const newUser = new userModel({
                name: data.name,
                email: data.email,
                gender: data.gender,
                mobile: data.mobile,
                password: data.password,
                userPic: req.file.filename
                })
            
                
            await newUser.save()
               
            res.render('User_reg',{'message': 'User Registered Succesfully'})

        }
        catch(e){
            console.log(e)
             
            
            res.render('User_reg',{'message': 'Error'})


        }
    },
}