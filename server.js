const express=require("express")
const app=express()
const PORT=3000


app.get("/",(req,res)=>{
    res.send("<h1>99 Bottles of beer on the wall</h1><a href=/98>take one down, pass it around</a>")
})
app.get('/:number_of_bottles', (req, res) =>{
    const bottles=req.params.number_of_bottles
    const nextBottles = bottles - 1;
    
  const link = (nextBottles > 0) ? `<a href="/${nextBottles}">Take one down, pass it around</a>` : '';
  const restartLink = '<a href="/">Start over</a>';
  res.send(`
    <h1>${bottles} Bottles of beer on the wall</h1>
    ${link}
    ${restartLink}
  `)
})
app.listen(PORT,()=>{
    console.log("listening port:3000")
})


