import asyncHandler from 'express-async-handler'
import Player from '../models/Player.js'
import generateToken from '../utils/generateToken.js'

//------- REGISTER ------------------------------------------
const registerPlayer = asyncHandler(async (req, res) => {
  // destructure from the request
  const { name, email, profilePic, password } = req.body
  // find an existing record
  const existingPlayer = await Player.findOne({ email })
  //
  if (existingPlayer) {
    res.status(400).json({ message: `Player already exists` })
  }
  // create a player
  const player = await Player.create({
    name,
    email,
    password,
    position: '',
    number: '',
    age: '',
    height: '',
    weight: '',
    bats: '',
    throws: '',
    hs: '',
    bio: '',
    profilePic: '',
    stats: [],
  })
  // if player call generateToken
  if (player) {
    generateToken(res, player._id)
    //
    res.status(201).json({
      _id: player._id,
      name: player.name,
      email: player.email,
      bio: player.bio,
      profilePic: profilePic,
      stats: [],
    })
  } else {
    res.status(400)
    throw new Error('Invalid player data')
  }
})

//------- AUTHORIZE ------------------------------------------

const authPlayer = asyncHandler(async (req, res) => {
  // destructure from the request
  const {
    email,
    password,
    position,
    number,
    bio,
    profilePic,
    age,
    height,
    weight,
    bats,
    throws,
    hs,
    stats,
  } = req.body
  // find an existing record
  const player = await Player.findOne({ email })
  //
  if (player && (await player.matchPassword(password))) {
    generateToken(res, player._id)

    // need to provide all data when we return the auth object
    player.email = email || player.email
    player.position = position || player.position
    player.number = number || player.number
    player.bio = bio || player.bio
    player.profilePic = profilePic || player.profilePic
    player.age = age || player.age
    player.height = height || player.height
    player.weight = weight || player.weight
    player.bats = bats || player.bats
    player.throws = throws || player.throws
    player.hs = hs || player.hs
    player.stats = stats || player.stats
    //
    res.status(201).json({
      _id: player._id,
      name: player.name,
      email: player.email,
      position: player.position,
      number: player.number,
      bio: player.bio,
      profilePic: player.profilePic,
      age: player.age,
      height: player.height,
      weight: player.weight,
      bats: player.bats,
      throws: player.throws,
      hs: player.hs,
      stats: player.stats,
    })
    res.status(201).json({ message: 'Player still authorized here' })
  } else {
    res.status(401)
    throw new Error('Invalid player data')
  }
})

//------- LOGOUT ------------------------------------------

const logoutPlayer = asyncHandler(async (req, res) => {
  // clear the cookie
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(201).json({ message: 'Player logged out' })
})

//------- GET PROFILE ------------------------------------------

const getPlayerProfile = asyncHandler(async (req, res) => {
  // create player object from request
  const player = {
    _id: req.player._id,
    name: req.player.name,
    email: req.player.email,
    position: req.player.position,
    bio: req.player.bio,
    profilePic: req.player.profilePic,
    stats: req.player.stats,
  }
  // send player data json
  res.status(200).json(player)
})

//------- UPDATE ------------------------------------------
const updatePlayerProfile = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    position,
    number,
    age,
    height,
    weight,
    bats,
    throws,
    hs,
    bio,
    profilePic,
    stats,
  } = req.body
  // find player by ID

  const player = await Player.findById(req.player._id)

  // set player (in realtime) to req data
  if (player) {
    player.name = name || player.name
    player.email = email || player.email
    player.position = position || player.position
    player.number = number || player.number
    player.age = age || player.age
    player.height = height || player.height
    player.weight = weight || player.weight
    player.bats = bats || player.bats
    player.throws = throws || player.throws
    player.hs = hs || player.hs
    player.bio = bio || player.bio
    player.profilePic = profilePic || player.profilePic
    player.stats = stats || player.stats

    // save the update
    const updatedPlayer = await player.save()

    // send back with updated data
    res.status(200).json({
      _id: updatedPlayer._id,
      name: updatedPlayer.name,
      email: updatedPlayer.email,
      position: updatedPlayer.position,
      number: updatedPlayer.number,
      age: updatedPlayer.age,
      height: updatedPlayer.height,
      weight: updatedPlayer.weight,
      bats: updatedPlayer.bats,
      throws: updatedPlayer.throws,
      hs: updatedPlayer.hs,
      bio: updatedPlayer.bio,
      profilePic: updatedPlayer.profilePic,
      stats: updatedPlayer.stats,
    })
  } else {
    res.status(404)
    throw new Error('Player not found')
  }
  res.status(200).json({ message: 'Player updated here' })
})

export {
  registerPlayer,
  authPlayer,
  getPlayerProfile,
  updatePlayerProfile,
  logoutPlayer,
}
