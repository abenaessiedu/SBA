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

app.use(express.urlencoded());
app.use(express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 


app.use("/api/BOBrands", blackOwnedBrandsRoutes)


app.get("/views", (req, res)=>{
    // res.render("home.ejs", {name: "HOMEBASE"})
    res.render("home.ejs", {name: "HOMEBASE"})
})

app.use((err, req, next)=> {
    console.error(err.stack); 
    res.status(404).send("Something broke!"); 
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});