const mongoose =require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/notifications");
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports= {connectDB};