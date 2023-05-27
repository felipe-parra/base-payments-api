import { Request, Response } from 'express'
import Controller from '../controllers/gretting.controller'

export default {
  GrettingsService
}

async function GrettingsService(req: Request, res: Response) {
  try {
    const { name } = req.query

    const message = name
      ? Controller.GrettingsByNames(name as string)
      : Controller.Grettings()

    return res.status(200).json({ message })
  } catch (error) {
    console.error(JSON.stringify(error))
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
