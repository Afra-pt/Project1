const multer = require('multer');
const util = require('util')
const path = require ('path')

const dir = path.join(__dirname,"./upload")
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,dir);

    },
    filename:function(req,file,cb){
       
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const uplaodUserData = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 }, }).single('userPic')
const upload = util.promisify(uplaodUserData)

module.exports = async(req,res,next)=>{
    await upload (req,res)
    next ()
}