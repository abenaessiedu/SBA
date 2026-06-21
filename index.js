//bring in express
import express from 'express'; 
import pokemonRoutes from './routes/pokemon.js'
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
app.use("/api/pokemon", pokemonRoutes)

app.get("/", (req, res) =>{
    res.send("In it to Win it")
})

app.get("/views", (req, res)=>{
    // res.render("home.ejs", {name: "Quinn"})
    res.render("home.ejs", {name: "notQuinn"})
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});