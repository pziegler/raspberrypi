function setDate() {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    var displayableDate = "Times for " + year + "-" + month + "-" + day;
    return displayableDate;
}