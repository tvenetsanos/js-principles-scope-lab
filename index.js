customerName = "bob"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = "not bob"
    return bestCustomer
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
    return bestCustomer
}

const leastFavoriteCustomer = "karen"

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = "jill"
}