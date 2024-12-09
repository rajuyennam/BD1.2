const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function getWelcomeMessage(){
  return "Welcom to our service!";

}

app.get("/welcome",(req,res)=>{
  res.send(getWelcomeMessage());
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
