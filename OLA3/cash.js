//Marlene Habib
//Instructor: Dr. Yang
//OLA 3
//cash.js
//Date: 2-27-2024
//Due Date: 2-27-2024

//Create the cashRegister object
var cashRegister = {
    total: 0, //Initialized to 0 in total
    item: 0, //Initialized to 0 in item

    //add method
    add: function(itemCost) {
        this.total += itemCost;
    }
};

//Create the scan function
function scan() {
    var NumberOfItems = parseInt(prompt("Enter the total number of items:")); //Enter how many items in integer.

    //Check if there is a valid number for items
    if (isNaN(NumberOfItems) || NumberOfItems < 0 ){
        confirm("Please enter a valid number of items.");
        return;
    }

    for (var i = 0; i < NumberOfItems; i++) {
        var cost = parseFloat(prompt("Enter the cost for item " + (i + 1) + ":")); //Enter the cost for each item.

        //If you enter 0
        if (NumberOfItems == 0){
            confirm("Please Try Again.");
        }

        // Check if there is a valid number for cost of the item
        if (isNaN(cost) || cost < 0){
            confirm("Please enter a valid cost of the item.")
            i--;
        }

        else{
            cashRegister.add(parseFloat(cost)); //Turn each cost to float and call cashRegister.add.
        }
    }
    cashRegister.item += NumberOfItems; //Continue adding more items and save it to cashRegister.item
}



//Create the print function
function print() {
    if (cashRegister.total == 0){   //If you click the total button before clicking the scan button 
        confirm("Please enter your items cost first.");
    } 
    
    else if (cashRegister.item == 1){   //If you only enter 1 item at the beginning 
        confirm("The total cost of " + cashRegister.item + " item is $" + cashRegister.total.toFixed(2));
        confirm("Feel free to add more items If you want.")
    }

    else{   //If you enter more items
        confirm("The total cost of " + cashRegister.item + " items is $" + cashRegister.total.toFixed(2));
        confirm("Come Back Soon!")
    }
}