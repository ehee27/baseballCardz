import Coach from '../models/Coach.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

const registerCoach = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const existingCoach = await Coach.findOne({ email })
  if (existingCoach) {
    res.status(400).json({ message: 'Coach already exists' })
  }
  const coach = await Coach.create({
    name,
    email,
    password,
  })
  if (coach) {
    generateToken(res, coach._id)
    res.status(201).json({
      _id: coach._id,
      name: coach.name,
      email: coach.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid coach data')
  }
})

//---------------------------------------------------------
const authCoach = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const coach = await Coach.findOne({ email })

  if (coach) {
    generateToken(res, coach._id)
    res.status(201).json({
      _id: coach._id,
      name: coach.name,
      email: coach.email,
    })
    res.status(201).json({ message: 'Coach still authorized' })
  } else {
    res.status(400)
    throw new Error('Invalid coach data')
  }
})

//---------------------------------------------------------
const logoutCoach = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })

  res.status(201).json({ message: 'Coach logged out' })
})

//---------------------------------------------------------
const getCoachProfile = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'Coach profile' })
})

//---------------------------------------------------------
const updateCoachProfile = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'Coach profile updated' })
})

//---------------------------------------------------------

export {
  registerCoach,
  authCoach,
  logoutCoach,
  getCoachProfile,
  updateCoachProfile,
}
