var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ProductSchema = new Schema({
  // `title` is required and of type String
  title: {
      type: String,
      required:true
  },
  img: {
      type: String,
      required: true
  },
  price: {
      type: Integer,
      required: true
  },
  company: {
      type: String,
      required: true
  },
  info: {
      type: String,
      required: true
  },
  inCart: {
      type: String,
      required: true
  },
  count: {
      type: Integer,
      required: true
  },
  total: {
      type: Integer,
      required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Product = mongoose.model("Product", ProductSchema);

// Export the Product model
module.exports = Product;
