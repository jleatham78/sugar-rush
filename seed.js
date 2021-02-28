const {Drinks} = require('./models');
const sequelize = require('./config/connection');

const menuData = [
{
    drink_name: "Midnight Moon",
    base: "Coke",
    add_ins: "strawberry, coconut, cream"
},
{
    drink_name: "Midnight Moon",
    base: "Diet Coke",
    add_ins: "strawberry, coconut, cream"
},
{
    drink_name: "Midnight Moon",
    base: "Coke Zero",
    add_ins: "strawberry, coconut, cream"
},
{
    drink_name: "Midnight Moon",
    base: "Pepsi",
    add_ins: "strawberry, coconut, cream"
},
{
    drink_name: "Midnight Moon",
    base: "Diet Pepsi",
    add_ins: "strawberry, coconut, cream"
},
{
    drink_name: "Red Razzle", 
    base: "Coke",
    add_ins: "raspberry puree, blackberry"
},
{
    drink_name: "Red Razzle", 
    base: "Diet Coke", 
    add_ins: "raspberry puree, blackberry"
},
{
    drink_name: "Red Razzle", 
    base: "Coke Zero", 
    add_ins: "raspberry puree, blackberry"
},
{
    drink_name: "Red Razzle", 
    base: "Pepsi", 
    add_ins: "raspberry puree, blackberry"
},
{
    drink_name: "Red Razzle", 
    base: "Diet Pepsi", 
    add_ins: "raspberry puree, blackberry"
},
{
    drink_name: "Mango Dragon", 
    base: "Coke", 
    add_ins: "mango puree, coconut, fresh lime"
},
{
    drink_name: "Mango Dragon", 
    base: "Diet Coke", 
    add_ins: "mango puree, coconut, fresh lime"
},
{
    drink_name: "Mango Dragon", 
    base: "Coke Zero", 
    add_ins: "mango puree, coconut, fresh lime"
},
{
    drink_name: "Mango Dragon", 
    base: "Pepsi", 
    add_ins: "mango puree, coconut, fresh lime"
},
{
    drink_name: "Mango Dragon", 
    base: "Diet Pepsi", 
    add_ins: "mango puree, coconut, fresh lime"
},
{
    drink_name: "Cherry Blossom", 
    base: "Coke", 
    add_ins: "cherry, vanilla, m. cherry"
},
{
    drink_name: "Cherry Blossom", 
    base: "Diet Coke", 
    add_ins: "cherry, vanilla, m. cherry"
},
{
    drink_name: "Cherry Blossom", 
    base: "Coke Zero", 
    add_ins: "cherry, vanilla, m. cherry"
},
{
    drink_name: "Cherry Blossom", 
    base: "Pepsi", 
    add_ins: "cherry, vanilla, m. cherry"
},
{
    drink_name: "Cherry Blossom", 
    base: "Diet Pepsi", 
    add_ins: "cherry, vanilla, m. cherry"
},
{
    drink_name: "Super Schrute", 
    base: "Coke", 
    add_ins: "raspberry, blackberry, coconut"
},
{
    drink_name: "Super Schrute", 
    base: "Diet Coke", 
    add_ins: "raspberry, blackberry, coconut"
},
{
    drink_name: "Super Schrute", 
    base: "Coke Zero", 
    add_ins: "raspberry, blackberry, coconut"
},
{
    drink_name: "Super Schrute", 
    base: "Pepsi", 
    add_ins: "raspberry, blackberry, coconut"
},
{
    drink_name: "Super Schrute", 
    base: "Diet Pepsi", 
    add_ins: "raspberry, blackberry, coconut"
},
{
    drink_name: "Unicorn Blood", 
    base: "Coke", 
    add_ins: "cherry, coconut"
},
{
    drink_name: "Unicorn Blood", 
    base: "Diet Coke", 
    add_ins: "cherry, coconut"
},
{
    drink_name: "Unicorn Blood", 
    base: "Coke Zero", 
    add_ins: "cherry, coconut"
},
{
    drink_name: "Unicorn Blood", 
    base: "Pepsi", 
    add_ins: "cherry, coconut"
},
{
    drink_name: "Unicorn Blood", 
    base: "Diet Pepsi", 
    add_ins: "cherry, coconut"
},
{
    drink_name: "Granger", 
    base: "Coke", 
    add_ins: "cranberry, fresh lime"
},
{
    drink_name: "Granger", 
    base: "Diet Coke", 
    add_ins: "cranberry, fresh lime"
},
{
    drink_name: "Granger", 
    base: "Pepsi",
    add_ins: "cranberry, fresh lime"
},
{
    drink_name: "Granger", 
    base: "Diet Pepsi", 
    add_ins: "cranberry, fresh lime"
},
{
    drink_name: "Vanellope", 
    base: "Dr. Pepper", 
    add_ins: "coconut cream, strawberry puree, vanilla"
},
{
    drink_name: "Vanellope", 
    base: "Diet Dr. Pepper", 
    add_ins: "coconut cream, strawberry puree, vanilla"
},
{
    drink_name: "Endless Summer", 
    base: "Dr. Pepper", 
    add_ins: "mango puree, fresh lime"
},
{
    drink_name: "Endless Summer", 
    base: "Diet Dr. Pepper", 
    add_ins: "mango puree, fresh lime"
},
{
    drink_name: "Bennington", 
    base: "Dr. Pepper", 
    add_ins: "peach, fresh lime"
},
{
    drink_name: "Bennington", 
    base: "Diet Dr. Pepper", 
    add_ins: "peach, fresh lime"
},
{
    drink_name: "Pinapple Schweetz", 
    base: "Dr. Pepper", 
    add_ins: "cherry, pineapple"
},
{
    drink_name: "Pinapple Schweetz", 
    base: "Diet Dr. Pepper", 
    add_ins: "cherry, pineapple"
},
{
    drink_name: "The Upside Down", 
    base: "Dr. Pepper", 
    add_ins: "raspberry, coconut, cream"
},
{
    drink_name: "The Upside Down", 
    base: "Diet Dr. Pepper", 
    add_ins: "raspberry, coconut, cream"
},
{
    drink_name: "The Glitch", 
    base: "Dr. Pepper", 
    add_ins: "coconut, blackberry"
},
{
    drink_name: "The Glitch", 
    base: "Diet Dr. Pepper", 
    add_ins: "coconut, blackberry"
},
{
    drink_name: "Peach on the Beach", 
    base: "Dr. Pepper", 
    add_ins: "peach, cream, vanilla"
},
{
    drink_name: "Peach on the Beach", 
    base: "Diet Dr. Pepper", 
    add_ins: "peach, cream, vanilla"
},
{
    drink_name: "Sweet Mai Tai", 
    base: "Mountain Dew", 
    add_ins: "fresh lime, coconut, peach, mango puree"
},
{
    drink_name: "Sweet Mai Tai", 
    base: "Diet Mountain Dew", 
    add_ins: "fresh lime, coconut, peach, mango puree"
},
{
    drink_name: "Sweet Mai Tai", 
    base: "Sprite", 
    add_ins: "fresh lime, coconut, peach, mango puree"
},
{
    drink_name: "Sweet Mai Tai", 
    base: "Sprite Zero", 
    add_ins: "fresh lime, coconut, peach, mango puree"
},
{
    drink_name: "Sweet Mai Tai", 
    base: "7Up", 
    add_ins: "fresh lime, coconut, peach, mango puree"
},
{
    drink_name: "Ocean Water", 
    base: "Mountain Dew", 
    add_ins: "blue curacao, passion fruit"
},
{
    drink_name: "Ocean Water", 
    base: "Diet Mountain Dew", 
    add_ins: "blue curacao, passion fruit"
},
{
    drink_name: "Ocean Water", 
    base: "Sprite", 
    add_ins: "blue curacao, passion fruit"
},
{
    drink_name: "Ocean Water", 
    base: "Sprite Zero", 
    add_ins: "blue curacao, passion fruit"
},
{
    drink_name: "Ocean Water", 
    base: "7Up", 
    add_ins: "blue curacao, passion fruit"
},
{
    drink_name: "Ragnar", 
    base: "Mountain Dew", 
    add_ins: "vanilla, mango puree, raspberry"
},
{
    drink_name: "Ragnar", 
    base: "Diet Mountain Dew", 
    add_ins: "vanilla, mango puree, raspberry"
},
{
    drink_name: "Ragnar", 
    base: "Sprite", 
    add_ins: "vanilla, mango puree, raspberry"
},
{
    drink_name: "Ragnar", 
    base: "Sprite Zero", 
    add_ins: "vanilla, mango puree, raspberry"
},
{
    drink_name: "Ragnar", 
    base: "7Up", 
    add_ins: "vanilla, mango puree, raspberry"
},
{
    drink_name: "Tsunami", 
    base: "Mountain Dew", 
    add_ins: "green apple, raspberry, coconut"
},
{
    drink_name: "Tsunami", 
    base: "Diet Mountain Dew", 
    add_ins: "green apple, raspberry, coconut"
},
{
    drink_name: "Tsunami", 
    base: "Sprite", 
    add_ins: "green apple, raspberry, coconut"
},
{
    drink_name: "Tsunami", 
    base: "Sprite Zero", 
    add_ins: "green apple, raspberry, coconut"
},
{
    drink_name: "Tsunami", 
    base: "7Up", 
    add_ins: "green apple, raspberry, coconut"
},
{
    drink_name: "Tropical Sunset", 
    base: "Mountain Dew", 
    add_ins: "pineapple, strawberry, coconut"
},
{
    drink_name: "Tropical Sunset", 
    base: "Diet Mountain Dew", 
    add_ins: "pineapple, strawberry, coconut"
},
{
    drink_name: "Tropical Sunset", 
    base: "Sprite", 
    add_ins: "pineapple, strawberry, coconut"
},
{
    drink_name: "Tropical Sunset", 
    base: "Sprite Zero", 
    add_ins: "pineapple, strawberry, coconut"
},
{
    drink_name: "Tropical Sunset", 
    base: "7Up", 
    add_ins: "pineapple, strawberry, coconut"
},
{
    drink_name: "Queen B", 
    base: "Mountain Dew", 
    add_ins: "peach, pomegranate, blackberry"
},
{
    drink_name: "Queen B", 
    base: "Diet Mountain Dew", 
    add_ins: "peach, pomegranate, blackberry"
},
{
    drink_name: "Queen B", 
    base: "Sprite", 
    add_ins: "peach, pomegranate, blackberry"
},
{
    drink_name: "Queen B", 
    base: "Sprite Zero", 
    add_ins: "peach, pomegranate, blackberry"
},
{
    drink_name: "Queen B", 
    base: "7Up", 
    add_ins: "peach, pomegranate, blackberry"
},
{
    drink_name: "Miami Nights", 
    base: "Mountain Dew", 
    add_ins: "strawberry, peach puree, fresh lime"
},
{
    drink_name: "Miami Nights", 
    base: "Diet Mountain Dew", 
    add_ins: "strawberry, peach puree, fresh lime"
},
{
    drink_name: "Miami Nights", 
    base: "Sprite", 
    add_ins: "strawberry, peach puree, fresh lime"
},
{
    drink_name: "Miami Nights", 
    base: "Sprite Zero", 
    add_ins: "strawberry, peach puree, fresh lime"
},
{
    drink_name: "Miami Nights", 
    base: "7Up", 
    add_ins: "strawberry, peach puree, fresh lime"
},
{
    drink_name: "San Holo", 
    base: "Mountain Dew", 
    add_ins: "blood orange, mango"
},
{
    drink_name: "San Holo", 
    base: "Diet Mountain Dew", 
    add_ins: "blood orange, mango"
},
{
    drink_name: "San Holo", 
    base: "Sprite", 
    add_ins: "blood orange, mango"
},
{
    drink_name: "San Holo", 
    base: "Sprite Zero", 
    add_ins: "blood orange, mango"
},
{
    drink_name: "San Holo", 
    base: "7Up", 
    add_ins: "blood orange, mango"
},
{
    drink_name: "The Hufflepuff", 
    base: "Mountain Dew", 
    add_ins: "strawberry puree, kiwi"
},
{
    drink_name: "The Hufflepuff", 
    base: "Diet Mountain Dew", 
    add_ins: "strawberry puree, kiwi"
},
{
    drink_name: "The Hufflepuff", 
    base: "Sprite", 
    add_ins: "strawberry puree, kiwi"
},
{
    drink_name: "The Hufflepuff", 
    base: "Sprite Zero", 
    add_ins: "strawberry puree, kiwi"
},
{
    drink_name: "The Hufflepuff", 
    base: "7Up", 
    add_ins: "strawberry puree, kiwi"
},
{
    drink_name: "Vader", 
    base: "Mountain Dew", 
    add_ins: "blackberry, grape, fresh lime"
},
{
    drink_name: "Vader", 
    base: "Diet Mountain Dew", 
    add_ins: "blackberry, grape, fresh lime"
},
{
    drink_name: "Vader", 
    base: "Sprite", 
    add_ins: "blackberry, grape, fresh lime"
},
{
    drink_name: "Vader", 
    base: "Sprite Zero", 
    add_ins: "blackberry, grape, fresh lime"
},
{
    drink_name: "Vader", 
    base: "7Up", 
    add_ins: "blackberry, grape, fresh lime"
},
{
    drink_name: "Lost Boy", 
    base: "Mountain Dew", 
    add_ins: "watermelon, blueberry"
},
{
    drink_name: "Lost Boy", 
    base: "Diet Mountain Dew", 
    add_ins: "watermelon, blueberry"
},
{
    drink_name: "Lost Boy", 
    base: "Sprite", 
    add_ins: "watermelon, blueberry"
},
{
    drink_name: "Lost Boy", 
    base: "Sprite Zero", 
    add_ins: "watermelon, blueberry"
},
{
    drink_name: "Lost Boy", 
    base: "7Up", 
    add_ins: "watermelon, blueberry"
},
{
    drink_name: "Steve Harrington", 
    base: "Mountain Dew", 
    add_ins: "red raspberry, cream"
},
{
    drink_name: "Steve Harrington", 
    base: "Diet Mountain Dew", 
    add_ins: "red raspberry, cream"
},
{
    drink_name: "Steve Harrington", 
    base: "Sprite", 
    add_ins: "red raspberry, cream"
},
{
    drink_name: "Steve Harrington", 
    base: "Sprite Zero", 
    add_ins: "red raspberry, cream"
},
{
    drink_name: "Steve Harrington", 
    base: "7Up", 
    add_ins: "red raspberry, cream"
},
{
    drink_name: "The Oasis", 
    base: "Lemonade", 
    add_ins: "grenadine, pineapple, coconut"
},
{
    drink_name: "Patrick Star", 
    base: "Lemonade", 
    add_ins: "strawberry, kiwi"
},
{
    drink_name: "Castaway", 
    base: "Lemonade", 
    add_ins: "blueberry, coconut cream"
},
{
    drink_name: "Pikapeach", 
    base: "Lemonade", 
    add_ins: "peach puree, raspberry, m. cherry"
},
{
    drink_name: "Blue Lagoon", 
    base: "Lemonade", 
    add_ins: "blue raspberry, vanilla"
},
{
    drink_name: "Island Girl", 
    base: "Lemonade", 
    add_ins: "watermelon, coconut"
},
{
    drink_name: "Patronus Punch", 
    base: "Lemonade", 
    add_ins: "mango puree, blackberry"
},
{
    drink_name: "Master Chief", 
    base: "Redbull", 
    add_ins: "green apple, kiwi"
},
{
    drink_name: "Master Chief", 
    base: "Rockstar", 
    add_ins: "green apple, kiwi"
},
{
    drink_name: "Master Chief", 
    base: "Monster", 
    add_ins: "green apple, kiwi"
},
{
    drink_name: "Berry Boost", 
    base: "Redbull", 
    add_ins: "blueberry, raspberry"
},
{
    drink_name: "Berry Boost", 
    base: "Rockstar", 
    add_ins: "blueberry, raspberry"
},
{
    drink_name: "Berry Boost", 
    base: "Monster", 
    add_ins: "blueberry, raspberry"
},
{
    drink_name: "Nirvana", 
    base: "Redbull", 
    add_ins: "strawberry, orange"
},
{
    drink_name: "Nirvana", 
    base: "Rockstar", 
    add_ins: "strawberry, orange"
},
{
    drink_name: "Nirvana", 
    base: "Monster", 
    add_ins: "strawberry, orange"
},
{
    drink_name: "Highscore", 
    base: "Redbull", 
    add_ins: "blue raspberry, coconut"
},
{
    drink_name: "Highscore", 
    base: "Rockstar", 
    add_ins: "blue raspberry, coconut"
},
{
    drink_name: "Highscore", 
    base: "Monster", 
    add_ins: "blue raspberry, coconut"
},
{
    drink_name: "Maximum Overdrive", 
    base: "Redbull", 
    add_ins: "pineapple, cherry"
},
{
    drink_name: "Maximum Overdrive", 
    base: "Rockstar", 
    add_ins: "pineapple, cherry"
},
{
    drink_name: "Maximum Overdrive", 
    base: "Monster", 
    add_ins: "pineapple, cherry"
},
{
    drink_name: "Patronus Punch", 
    base: "Redbull", 
    add_ins: "cherry, fresh lime, vanilla"
},
{
    drink_name: "Patronus Punch", 
    base: "Rockstar", 
    add_ins: "cherry, fresh lime, vanilla"
},
{
    drink_name: "Patronus Punch", 
    base: "Monster", 
    add_ins: "cherry, fresh lime, vanilla"
},
{
    drink_name: "Shark Bite", 
    base: "Kids", 
    add_ins: "blue raspberry, cream, raspberry sauce, shark gummies, italian soda"
},
{
    drink_name: "Reptile Rush", 
    base: "Kids", 
    add_ins: "kiwi, watermelon, whip cream, dinosaurs, lemonade"
},
{
    drink_name: "Groot Beer", 
    base: "Kids", 
    add_ins: "chocolate, vanilla, rootbeer, chocolate sprinkles, whip cream"
},
{
    drink_name: "Birthday Cake", 
    base: "Kids", 
    add_ins: "cupcake, strawberry, sprinkles, cherry, whip cream, sprite"
}

]