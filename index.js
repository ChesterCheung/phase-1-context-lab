function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    const timeOutEvents = []
    const timeInEvents = []
    const employeeObject = {firstName, familyName, title, payPerHour, timeInEvents, timeOutEvents}
    return employeeObject 
}

function createEmployeeRecords(employees){
    const employeeRecords = employees.map(createEmployeeRecord)
        return employeeRecords
    }
    function createTimeInEvent(datestamp){
        const timeInEvent = {type: "TimeIn", date: datestamp.split(" ")[0], hour: parseInt(datestamp.split(" ")[1])}
        this.timeInEvents.push(timeInEvent)
        return this
    }
    function createTimeOutEvent(datestamp){
        const timeOutEvent = {type: "TimeOut", date: datestamp.split(" ")[0], hour: parseInt(datestamp.split(" ")[1])}
        this.timeOutEvents.push(timeOutEvent)
        return this
    }
    function hoursWorkedOnDate (date) {
        const timeIn = this.timeInEvents.find(event => event.date === date)
        const timeOut = this.timeOutEvents.find(event => event.date === date)
        return (timeOut.hour - timeIn.hour)/100
    }
    function wagesEarnedOnDate(date){
        return (this.payPerHour * hoursWorkedOnDate(date)) 
    }
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(array){
    const reducer = (total, employeeRecord) => total + allWagesFor(employeeRecord)
    return array.reduce(reducer, 0)
}