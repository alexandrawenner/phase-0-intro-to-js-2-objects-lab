// Write your solution in this file!
const employee = {
    name: "Alex",
    streetAddress: " 200 New Jersey Road",
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployeeInformation = {... employee}
    updatedEmployeeInformation[key] = value
    return updatedEmployeeInformation
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployeeLog = {... employee}
    newEmployeeLog[key] = value
    return newEmployeeLog

}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    const deleteEmployee =(employee)
    employee[key]=value
    return deleteEmployee
}