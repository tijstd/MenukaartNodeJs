const prompt = require('prompt-sync')()
const menu = require('./menu.json')


var totalPrice = 0.00
var CorrectOrder = false
var DoneOrdering = false

console.log("Here is the blue 10 menu with the dish id, name of dish and price respectively ")

menu.forEach(MenuItem => {
  MenuItem = `   ${MenuItem.id}  :  ${MenuItem.Dish}  :  ${MenuItem.Price}`
  console.log(MenuItem)
});




  
  var order = []

  while (DoneOrdering == false ) {

    var userInput = prompt("Type the number you want to order, if done ordering press 'end': ")

    if(userInput.valueOf() == 'end'){
       
      console.log("This is your current shopping bag: "+ order)
      var satisfiedOrder = prompt("are you satisfied with the order ? press 1 if yes 2 if not ")

      if ( satisfiedOrder ==1){
         
        DoneOrdering = true 

      }

       
    }else if( parseInt(userInput) < 11 && parseInt(userInput) > -1 ){
       
      totalPrice += menu[userInput].Price
        order+= (menu[userInput].Dish) + " "
        

    }else {
        console.log("This is not a valid input.")
    }
    
  } 
    

console.log(" The price of you order is in total: " + totalPrice)


