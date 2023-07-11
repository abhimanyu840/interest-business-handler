import customers from "../../models/customers";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { uid, cname, gname, address, pamount, paidamount, paidinterest, slug, date, paidtill } = req.body;
    // console.log(uid, cname, gname, address, pamount, paidamount, paidinterest, slug, date, paidtill);
    let customer = new customers({ uid, cname, gname, address, pamount, paidamount, paidinterest, slug, date, paidtill })
    await customer.save()
    res.status(200).json({ success: "success", _id: customer._id, uid: customer.uid, cname: customer.cname, gname: customer.gname, address: customer.address, pamount: customer.pamount, paidamount: customer.paidamount, paidinterest: customer.paidinterest, slug: customer.slug, date: customer.date, paidtill: customer.paidtill }) 
  }
  else {
    res.status(400).json({ error: "Method not allowed" })
  }
  }

export default connectDb(handler)