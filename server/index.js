const express = require("express");
const app = express();
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { errorToJSON } = require("next/dist/server/render");
const JwtStrategy = require("passport-jwt").Strategy;
ExtractJwt = require("passport-jwt").ExtractJwt;

dotenv.config();
const cors = require("cors");
const port = process.env.PORT || 8080;
console.log(`Server will listen on port: ${port}`);
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:2W8dfv5tRoGSdIhE@spotify.r7rwbna.mongodb.net/?retryWrites=true&w=majority&appName=Spotify",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("Connected ");
  })
  .catch((err) => {
    console.log(err);
  });
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "HimanshuGoel";

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    if (jwt_payload.exp < Date.now() / 1000) {
      return done(null, false);
    }

    // Check if token is revoked
    if (blacklist.has(jwt_payload.token)) {
      return done(null, false);
    }
    User.findOne({ _id: jwt_payload.identifier }, function (err, user) {
      if (err) {
        console.log(err);
        return done(err, false);
      }
      if (user) {
        console.log(user);

        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);
app.listen(port, () => {
  console.log("running on  " + port);
});
