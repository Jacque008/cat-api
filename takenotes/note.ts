  mutation {
    addCat(
      name: "Whiskers",
      age: 2,
      breed: "Siamese",
      color: "White",
      energy_level: 4,
      temperament: ["Friendly", "Playful"]
    ) {
      data{id, name}
      error
      ok
    }
  } 

  mutation {
    addCat(
      name: "Kitty",
      age: 1,
      breed: "Persian",
      color: "brown",
      energy_level: 2,
      temperament: ["hungry", "greed"]
    ) {
      data{id, name}
      error
      ok
    }
  } 
  query{
    cats(limit:7) {
      id
      age
      name
      temperament
      energy_level
      color
      breed
    }
  }

  query{
    cat(id:4) {
      id
      age
      name
      temperament
      energy_level
      color
      breed
    }
  }

  mutation{
    deleteCat(id: 4)
    {
      data{id, name}
      error
      ok}
  }

  mutation{
    feedCat(id:4){
      data{
        id
        name
        energy_level
      }
      error
      ok
    }
  }