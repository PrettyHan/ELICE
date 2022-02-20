const { Router } = require("express");
const { Book } = require("../models");

const router = Router();

// "/" 경로에서 전체 책 데이터를 DB에서 찾아 반환하세요.
router.get('/',async (req,res) => {
    const data = await Book.find({})
    res.json(data)
})

// "/:id" 경로에서 입력된 id에 해당하는 책 데이터를 DB에서 찾아 반환하세요.
router.get("/:id", async(req,res) => {
    const ida = Number(req.params.id)
    const book = await Book.find({id : ida})
    res.json(book)
})



module.exports = router;

