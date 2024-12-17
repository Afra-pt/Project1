var userModel = require('../Model/User.model')

module.exports = {
    dashboard: async(req,res) => {
        // console.log(req.method,'////////')
        const currentUser= req.params.user
        console.log(currentUser)
       
    
    
                res.render('dashboard') 
    }     
}