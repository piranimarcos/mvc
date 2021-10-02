const mongoose = require("mongoose");

const conection =
  "mongodb+srv://user_node:tEd8UmWsUSvUmqJ4@cluster.yaevp.mongodb.net/test";

const dbConection = async () => {
  try {
    await mongoose.connect(conection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    });

    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error db conection");
  }
};

module.exports = {
  dbConection,
};
