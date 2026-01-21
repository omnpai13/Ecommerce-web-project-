import Order from "../models/Order.js";

// Create new order
export const createOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, totalPrice } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get logged in user orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin – get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin – update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = req.body.status || order.status;

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Phase 7.3 - Mark order as paid
export const markOrderAsPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.isPaid = true;
    order.paidAt = Date.now();

    order.paymentResult = {
      paymentId: req.body.paymentId || "COD",
      orderId: req.body.orderId || null,
      signature: req.body.signature || null,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Phase 7.4 - Mark order as delivered (ADMIN)
export const markOrderAsDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Optional but recommended check
    if (!order.isPaid) {
      return res
        .status(400)
        .json({ message: "Cannot deliver unpaid order" });
    }

    order.status = "Delivered";

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

