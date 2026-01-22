import Product from "../models/Product.js";

// @desc   Get all products
// @route  GET /api/products
// @access Public
export const getProducts = async (req, res) => {
  try {
    const pageSize = 8;
    const page = Number(req.query.pageNumber) || 1;

    // Search
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    // Category filter
    const category = req.query.category
      ? { category: req.query.category }
      : {};

    // Sorting
    let sortOption = { createdAt: -1 }; // default: newest
    if (req.query.sort === "price") sortOption = { price: 1 };
    if (req.query.sort === "-price") sortOption = { price: -1 };
    if (req.query.sort === "rating") sortOption = { rating: -1 };

    const filter = { ...keyword, ...category };

    const count = await Product.countDocuments(filter);

    const products = await Product.find(filter)
      .sort(sortOption)
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({
      products,
      page,
      pages: Math.ceil(count / pageSize),
      totalProducts: count,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// @desc   Get single product
// @route  GET /api/products/:id
// @access Public
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// @desc   Create product
// @route  POST /api/products
// @access Admin
export const createProduct = async (req, res) => {
  const product = new Product({
    name: "Sample Product",
    price: 0,
    description: "Sample description",
    category: "Sample category",
    countInStock: 0,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

// @desc   Delete product
// @route  DELETE /api/products/:id
// @access Admin
export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.json({ message: "Product removed" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// @desc   Update product
// @route  PUT /api/products/:id
// @access Admin
export const updateProduct = async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    category,
    countInStock,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;
    product.category = category || product.category;
    product.countInStock = countInStock || product.countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// @desc   Create new review
// @route  POST /api/products/:id/reviews
// @access Private
export const createProductReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if user already reviewed
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      return res.status(400).json({ message: "Product already reviewed" });
    }

    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => acc + item.rating, 0) /
      product.reviews.length;

    await product.save();

    res.status(201).json({ message: "Review added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//to create sample products by admin
export const createSampleProduct = async (req, res) => {
  const product = new Product({
    name: "Sample Product",
    price: 0,
    description: "Sample description",
    image: "/images/sample.jpg",
    category: "Sample Category",
    countInStock: 0,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};