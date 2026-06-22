import express from "express";
import blackOwnedBrands from "../data/blackOwnedBrands.js";
import { types } from "../data/types.js";

const router = express.Router();

// http://localhost:port/api/backownedIndex 

router.post("/", (req, res) => {
  if(!req.body.id || !req.body.name || !req.body.type1 || req.body.type1) {
    return res.status(400).send("Some Information is Missing");
  }
  console.log("WE GOT THE DATAAA!");
  console.log(req.body);

  const types = [];
  types.push(req.body.type1);
  types.push(req.body.type2);

  const transformedData = {
    id: Number(req.body.id),
    name: req.body.name,
    types: types,
  };

  blackOwnedBrands.push(transformedData);
  res.status(201).send(transformedData);
});

// /type/yadayada
router.get("/type/:type", (req, res) => {
  if (req.params.type in types) {
    // const filteredPokemon = pokemon.filter(p => p.types.find(type => type === req.params.type.toLowerCase()))
    const filteredblackOwnedBrands = blackOwnedBrands.filter((p) =>
      p.types.includes(req.params.type.toLowerCase()),
    );
    res.status(200).json(filteredblackOwnedBrands);
    // res.send("type route with type "+req.params.type)
  } else {
    res.status(404).send("Invalid Type!");
  }
  // for (key in object){}
});

// get a Single pokemon by ID or Name
router.get("/:coolData", (req, res) => {
  const foundblackOwnedBrands = blackOwnedBrands.find(
    (p) =>
      p.id == req.params.coolData ||
      p.name == req.params.coolData.toLowerCase(),
  );
  if (foundblackOwnedBrands) {
    res.status(200).json(foundblackOwnedBrands);
  } else {
    res.status(404).send("There isn't a brand with that information, try again");
  }
});

router.get("/", (req, res) => {
  res.json(blackOwnedBrands);
});
export default router;