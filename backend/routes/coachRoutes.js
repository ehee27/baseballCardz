// basic route tree (register, auth, logout, getProfile, updateProfile
// after frontend is set with routes we can 'protect'

import express from 'express'
import {
  registerCoach,
  authCoach,
  getCoachProfile,
  updateCoachProfile,
  logoutCoach,
} from '../controllers/coachController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', registerCoach)

router.post('/auth', authCoach)

router.post('/logout', logoutCoach)

router
  .route('/profile')
  .get(protect, getCoachProfile)
  .put(protect, updateCoachProfile)

export default router
