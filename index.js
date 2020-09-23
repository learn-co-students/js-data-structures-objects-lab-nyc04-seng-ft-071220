// Write your solution in this file!
let driver = {}
let updateDriverWithKeyAndValue = (driver, key, value) => {
    return Object.assign({}, driver, { [key]: value }); 

}

let destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value
    return driver
}

let deleteFromDriverByKey = (driver, key) => {
    let newdriver = Object.assign({}, driver)

    delete newdriver[key];
    return newdriver
}

let destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver

}