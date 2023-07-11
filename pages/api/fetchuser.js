import Users from '../../models/users'
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await Users.findOne({ "email": req.body.email })
        if (user) {
            // console.log(user)
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);

            // var decryptedPass = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
            if (req.body.email == user.email && req.body.password == decryptedPass) {
                var token = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_SECRET, { expiresIn: '3d' })
                // res.status(200).json({ success: true, email: user.email, name: user.name /*{token}*/ })
                res.status(200).json({ success: true, token, _id:user._id })
            }
            else {
                res.status(200).json({ success: false, error: "Invalid Credentials" })
            }
        }
        else {
            res.status(200).json({ success: false, error: "No User Found" })
        }
    }
    else {
        res.status(200).json({ error: "invalid method" })
    }
}

export default connectDb(handler)