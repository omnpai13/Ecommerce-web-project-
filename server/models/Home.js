import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  heroImage: {
    type: String,
  },
  edits: [
    {
      image: String,
      title: String,
    },
  ],
});

const Home = mongoose.model("Home", homeSchema);
export default Home;
