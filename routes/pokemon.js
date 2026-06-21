import express from "express";
import pokemon from "../data/pokemon.js";
import { types } from "../data/types.js";

const router = express.Router();

// http://localhost:port/api/pokemon

router.post("/", (req, res) => {
  console.log("We got to the Post route!");
  console.log(req.body);
  /* { DATA WE ARE GETTING
id: ,
name: ,
type1: ,
type2:
}

NEEDS TO LOOK LIKE:
{ id: ,
name: ,
types: [type1, type2]
}
*/

  const types = [];
  types.push(req.body.type1);
  types.push(req.body.type2);

  const transformedData = {
    id: Number(req.body.id),
    name: req.body.name,
    types: types,
  };

  pokemon.push(transformedData);
  res.status(201).send(transformedData);
});

// /type/banana
router.get("/type/:type", (req, res) => {
  if (req.params.type in types) {
    // const filteredPokemon = pokemon.filter(p => p.types.find(type => type === req.params.type.toLowerCase()))
    const filteredPokemon = pokemon.filter((p) =>
      p.types.includes(req.params.type.toLowerCase()),
    );
    res.status(200).json(filteredPokemon);
    // res.send("type route with type "+req.params.type)
  } else {
    res.status(404).send("Invalid Type!");
  }
  // for (key in object){}
});

// get a Single pokemon by ID or Name
router.get("/:coolData", (req, res) => {
  const foundPokemon = pokemon.find(
    (p) =>
      p.id == req.params.coolData ||
      p.name == req.params.coolData.toLowerCase(),
  );
  if (foundPokemon) {
    res.status(200).json(foundPokemon);
  } else {
    res.status(404).send("No Pokemon with that Information");
  }
});

router.get("/", (req, res) => {
  res.json(pokemon);
});
export default router;