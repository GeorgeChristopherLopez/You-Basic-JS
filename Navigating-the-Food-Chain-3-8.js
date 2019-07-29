var eatsPlants = true;
var eatsAnimals = true;

var category = eatsPlants && eatsAnimals ? "omnivore" : 
               eatsAnimals ? "carnivore" : 
               eatsPlants ? "herbivore" : undefined;
              


console.log(category);
