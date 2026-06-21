//bring in express
import express from 'express'; 
import blackOwnedBrandsRoutes from './routes/blackOwnedBrands.js'

import ejs from 'ejs'; 

//create the express app 
const app = express(); 

//create port 
const port = 8888; 

//run the port 

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
app.set("view engine", "ejs")

app.use(express.urlencoded())
app.use(express.static('public'))
app.use("/api/BOBrands", blackOwnedBrandsRoutes)

app.get("/", (req, res) =>{
    res.send("In it to Win it")
})

app.get("/views", (req, res)=>{
    // res.render("home.ejs", {name: "HOMEBASE"})
    res.render("home.ejs", {name: "HOMEBASE"})
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});