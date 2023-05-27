import { Router } from 'express'
import exampleRoutes from './example.routes'

const router = Router()

router.use('/greetings', exampleRoutes)

export default router
