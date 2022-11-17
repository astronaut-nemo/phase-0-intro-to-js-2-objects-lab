// Write your solution in this file!
const employee = {
    name: "Agent47",
    streetaddress: "64 OhFive",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    // const newObj = {...employee};
    // newObj[key] = value;
    // return newObj;

    return {...employee, [key]: value}
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    // Use [] so that key evaluates as a variable instead of a keyName
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    // Make a copy
    const employeeRemoved = {...employee};
    // delete property with that key
    delete employeeRemoved[key];
    // return a new object
    return employeeRemoved;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}