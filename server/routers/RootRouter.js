import express from 'express'
const router = express.Router()
import {HomeController} from '../controllers'

router.get('/', HomeController.Welcome)

export default router