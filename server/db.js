const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
    //   useNewParse: true,
    //   useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect("mongodb://localhost:27017/todo-app", connectionParams);
    console.log("Connected to database");
  } catch (e) {
    console.log("Could not connect to database", e);
  }
};
