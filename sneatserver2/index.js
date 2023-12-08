const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const User = require("./models/User.js");
const Event = require("./models/Event.js");
const jsonwebtoken = require("jsonwebtoken");
const jwtVerify = require("./jwtVerify.js");

// CONFIGURATION

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Headers": "Content-type,Authorization",
  });
  next();
});

// Routes

app.get("/", (req, res) => {
  res.json("hello");
});

app.post("/user/register", async (req, res) => {
  try {
    const { email } = req.body;
    const userExisted = await User.findOne({ email: email });
    if (userExisted) {
      throw new Error("Email has been registered");
    } else {
      const user = await User.create(req.body);
      res.status(200).json(user);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  try {
    if (!user) {
      throw new Error("email adress is invalid");
    } else {
      const { userName, address, phoneNumber, state, zipCode } = user;
      if (password && password === user.password) {
        const token = jsonwebtoken.sign({ email: email }, "a1aqwerqsf", {
          expiresIn: "7d",
        });
        res.status(200).json({
          token,
          userName,
          email,
          address,
          phoneNumber,
          state,
          zipCode,
        });
      } else {
        throw new Error("Password is wrong");
      }
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.use(jwtVerify);

app.get("/event", async (req, res) => {
  try {
    const event = await Event.find();
    res.status(200).json(event);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.post("/event", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(200).json(event);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
app.put("/event/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findOneAndUpdate({ _id: eventId }, req.body);
    const updatedEvent = await Event.findOne({ _id: eventId });
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
app.delete("/event/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findOneAndDelete({ _id: eventId });
    if (!event) {
      return res
        .status(404)
        .json({ message: `cannot find any event ${eventId}` });
    }
    res.status(200).json(event);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.get("/user/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email: email });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.put("/user/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndUpdate({ email: email }, req.body);
    const updatedUser = await User.findOne({ email: email });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
app.put("/user/pwd/:email", async (req, res) => {
  try {
    const { userEmail, password, newPassword } = req.body;
    const user = await User.findOne({ email: userEmail });
    if (password === user.password) {
      const newUser = await User.findOneAndUpdate(
        { email: userEmail },
        { password: newPassword }
      );
      res.status(200).json(newUser);
    } else {
      throw new Error("Current password is wrong");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.delete("/user/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndDelete({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ message: `cannot find any user with email ${email}` });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Mongoose setup
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port:${PORT}`));
  })
  .catch((error) => console.log(error));

module.exports = app;
