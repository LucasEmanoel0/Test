import {Router} from 'express'
import user from '../controllers/user.js'
const router = Router()

router.post('/criar',user.newCount)

export default  router