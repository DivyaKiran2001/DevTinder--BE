const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
// const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// // get user by email

// app.get("/user", async (req, res) => {
//   const userEmail = req.body.emailId;
//   try {
//     const users = await User.find({ emailId: userEmail });
//     if (users.length === 0) {
//       res.status(404).send("User not Found!!");
//     } else {
//       res.send(users);
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// // get all users

// app.get("/feed", async (req, res) => {
//   const userEmail = req.body.emailId;
//   try {
//     const users = await User.find({});
//     if (users.length === 0) {
//       res.status(404).send("User not Found!!");
//     } else {
//       res.send(users);
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// app.delete("/user", async (req, res) => {
//   const userId = req.body.userId;

//   try {
//     const user = await User.findByIdAndDelete(userId);

//     res.send("User deleted successfully!!");
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// // update part of the user using patch

// app.patch("/user", async (req, res) => {
//   const userId = req.body.userId;
//   const data = req.body;

//   try {
//     const ALLOWED_UPDATES = [
//       "userId",
//       "photoUrl",
//       "about",
//       "gender",
//       "age",
//       "skills",
//     ];

//     const isUpdateAllowed = Object.keys(data).every((k) => {
//       ALLOWED_UPDATES.includes(k);
//     });

//     if (!isUpdateAllowed) {
//       throw new Error("Update not allowed");
//     }
//     const user = await User.findByIdAndUpdate({ _id: userId }, data, {
//       returnDocument: "after",
//       runValidators: true,
//     });
//     res.send("User Updated Successfully!!");
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

connectDB()
  .then(() => {
    console.log("connected....");
    app.listen(3000, () => {
      console.log("listening to serer ...... ");
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("not connected....");
  });
