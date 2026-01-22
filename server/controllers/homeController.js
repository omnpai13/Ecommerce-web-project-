import Home from "../models/Home.js";

// GET home data (for frontend Home page)
export const getHome = async (req, res) => {
  try {
    const home = await Home.findOne();

    if (!home) {
      return res.status(200).json({
        heroImage: "",
        edits: [],
      });
    }

    res.status(200).json(home);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE home data (for admin)
export const updateHome = async (req, res) => {
  try {
    let home = await Home.findOne();

    if (!home) {
      home = new Home(req.body);
    } else {
      home.heroImage = req.body.heroImage;
      home.edits = req.body.edits;
    }

    const savedHome = await home.save();
    res.json(savedHome);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
