import Users from "../../models/users";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email } = req.body;
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
      let user = new Users({
        name, email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
      })
      await user.save()
      res.status(200).json({ success: "success" })
    }
    else {
      res.status(400).json({ error: "User with this email already exists" })
    }

  }
  else {
    res.status(400).json({ error: "Method not allowed" })
  }

}


export default connectDb(handler)