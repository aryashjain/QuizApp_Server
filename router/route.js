import { Router } from "express";
const router = Router()
/** import controllers */
import * as controller from '../controllers/controller.js';


// /** Questions Routes */
// router.get('/questions',controller.getQuestions)
// router.post('/questions',controller.insertQuestions)

// routes chaining done 
router.route('/questions')
      .get(controller.getQuestions)
      .post(controller.insertQuestions)
      .delete(controller.deleteQuestions)



// result route
router.route('/result')
.get(controller.getResult)
.post(controller.storeResult)
.delete(controller.dropResult)


export default router;