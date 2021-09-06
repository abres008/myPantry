 var Items = [{
                item: "Mac and Cheese",
                quantity: 12,
                expDate: "2021-09-07"
            }
            ,{
                item: "Baked Beans",
                quantity: 4,
                expDate: "2021-12-04"
            }]

function populateList () {
    const itemTable = document.querySelector("#itemTable");
    
    //delete table contents before repopulating
    var tableLength = itemTable.rows.length;
    var tableHeaderPos = 1
    for (var i = tableHeaderPos; i < tableLength; i++) {
        itemTable.deleteRow(tableHeaderPos);
    }
    
    //populate the html table with contents from Items[]
    Items.forEach( (item) => {
        let row = itemTable.insertRow();
        let food = row.insertCell(0);
        food.innerHTML = item.item;
        let quantity = row.insertCell(1);
        quantity.innerHTML = item.quantity;
        let expDate = row.insertCell(2);
        expDate.innerHTML = item.expDate;
    });
}

function validateQuantity(quantity) {
    if(quantity < 1){
        return -1;
    }
    else {
        return 0;
    }
}

function validateDate(date) {
    var today = new Date();
    var entered = new Date(date);

    if(entered.toUTCString() < today.toUTCString()){
        return -1;
    }
    else {
        return 0;
    }
}

function validateItem(item) {
    if(item.length() < 1){
        return -1;
    }
    else {
        return 0;
    }
}

function submitItem() {
    var vItem = document.querySelector("#item").value;
    var vQuantity = document.querySelector("#quantity").value;
    var vDdate = document.querySelector("#expDate").value;

    if (validateItem(item) != 0) {
        return -1;
    }
    if (validateQuantity(quantity) != 0) {
        return -1;
    }
    if (validateDate(date) != 0) {
        return -1;
    }

    Items.push({item:vItem,
                quantity:vQuantity,
                expDate:vDdate});

    populateList();

    return 0;
    
}