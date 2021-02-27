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
    drink_name: "Master Chief", 
    base: "Energy Rush", 
    add_ins: "green apple, kiwi"
},
{
    drink_name: "Berry Boost", 
    base: "Energy Rush", 
    add_ins: "blueberry, raspberry"
},
{
    drink_name: "Nirvana", 
    base: "Energy Rush", 
    add_ins: "strawberry, orange"
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

//menu.create