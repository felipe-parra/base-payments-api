import { Router } from 'express'
import greetingService from '../services/greeting.service'

const router = Router()

router.get('/', greetingService.GrettingsService)

export default router
