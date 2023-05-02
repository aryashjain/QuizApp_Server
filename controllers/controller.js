import Question from "../models/questionSchema.js"
import Results from "../models/resultSchema.js"
import questions, { answers } from '../database/data.js'


// get all questions
export async function getQuestions(req,res){
    try{
       const q = await Question.find()
       res.json(q)
    }
    catch(err){
        res.json({err})
    }
}

// insert all questions

export async function insertQuestions(req,res){
  // insert many does not support callback now
    const defaultItems= {
        questions : questions,
        answers: answers
    }
  
    try{
        Question.insertMany(defaultItems).then(function () {
            res.json("Successfully saved defult items to DB");
          })
          .catch(function (err) {
            res.json(err);
          })
     }
     catch(err){
         res.json({err})
     }
}
// delete questions
export async function deleteQuestions(req,res){
  try{
    await Question.deleteMany();
    res.json({msg:"qs deleted succuessss"});

  }
  catch(err){
    res.json({"err":err})
  }
}


/** Result route controllers */
export async function getResult(req,res){
    try{
         const r = await Results.find();
         //(r)
        res.json({r});
    
      }
      catch(err){
        res.json({"err":err})
      }
}


// export async function storeResult(req, res){
//     try {
//          const { username, result, attempts, points, achived } = req.body;
//          if(!username && !result) throw new Error('Data Not Provided...!');
 
//          Results.create({ username, result, attempts, points, achived }, function(err, data){
//              res.json({ msg : "Result Saved Successfully...!"})
//          })
 
//     } catch (error) {
//          res.json({error})
//     }
//  }
export async function storeResult(req,res){
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username || !result) {
           throw new Error('Data not provided.');
        }
        await Results.create({
           username,
           result,
           attempts,
           points,
           achieved
        });
        res.json({msg: 'Successfully saved result to DB'});
     } catch (err) {
        res.json({msg: err.message});
     }
}
export async function dropResult(req,res){
    try {
        await Results.deleteMany();
        res.json({msg: 'res deleted'})
    } catch (error) {
        res.json({error});
    }
}

