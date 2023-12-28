import mongoose from 'mongoose'
// const Autoincrement = require('mongoose-sequence')(mongoose)
// const Autoincrement = require('mongoose-sequence')(mongoose)
import bcrypt from 'bcryptjs'

const playerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: false,
      default: '',
    },
    number: {
      type: Number,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    weight: {
      type: Number,
      required: false,
    },
    bats: {
      type: String,
      required: false,
    },
    throws: {
      type: String,
      required: false,
    },
    hs: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
      default: '',
    },
    profilePic: {
      type: String,
      required: false,
      default: '',
    },
    active: {
      type: Boolean,
      default: true,
    },
    stats: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
)
// playerSchema.plugin(Autoincrement, {
//   inc_field: 'profile_id',
//   id: 'profile_id',
//   start_seq: 100,
// })

playerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

playerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const Player = mongoose.model('Player', playerSchema)

export default Player
