const express  = require("express")
const router = express.Router()

const [addClause,getClause,AddSubCluse,updateSubCLause] = require('../Controllers/ClauseController')
router.post('/add_clause' , addClause)
router.get('/get_clause' , getClause)
router.post('/add_sub_clause/:id' , AddSubCluse)
router.patch('/update_sub_clause/:id' , updateSubCLause)
module.exports =  router


