const express = require("express");
const passport = require("passport");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authorizationMiddeleware } = require("../middlewares/auth");
const Song = require("../models/Song");
const User = require("../models/User");

router.post("/create", authorizationMiddeleware, async (req, res) => {
  const { name, thumbnail, track } = req.body;
  if (!name || !thumbnail || !track) {
    return res
      .status(301)
      .json({ Error: "Insufficient details to create Song" });
  }
  const artist = req.user._id;
  const detail = { name, thumbnail, track, artist };
  const createSong = await Song.create(detail);
  return res.status(200).json(createSong);
});

router.get("/get/mysongs", authorizationMiddeleware, async (req, res) => {
  const curruser = req.user;
  const songs = await Song.find({ artist: curruser._id }).populate("artist");
  return res.status(200).json({ data: songs });
});
router.get(
  "/get/artist/:artistId",
  authorizationMiddeleware,
  async (req, res) => {
    const artid = req.params.artistId;
    const artist = await User.findOne({ _id: artid });
    if (!artist) {
      return res.status(301).json({ err: "artist not found" });
    }
    const songs = await Song.find({ artist: artid });
    return res.status(200).json({ data: songs });
  }
);

router.get(
  "/get/songname/:soname",
  authorizationMiddeleware,
  async (req, res) => {
    const songname = req.params.soname;
    const foundsong = await Song.find({ name: songname });
    if (!foundsong) {
      return res.status(301).json({ message: "song not found" });
    }
    return res.status(200).json({ data: foundsong });
  }
);

module.exports = router;
