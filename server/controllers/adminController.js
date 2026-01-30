import Product from "../models/Product.js";
import Order from "../models/Order.js";
import User from "../models/User.js";

export const getAdminStats = async (req, res) => {
  try {
    const products = await Product.countDocuments();
    const orders = await Order.countDocuments();
    const users = await User.countDocuments();

    const revenueAgg = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$totalPrice" } } }
    ]);

    const revenue = revenueAgg[0]?.total || 0;

    res.json({ products, orders, users, revenue });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch admin stats" });
  }
};
