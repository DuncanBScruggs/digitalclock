function getValue() {
    var isChecked = document.getElementById("myonoffswitch").checked;

    if (isChecked) {
        console.log("Input is checked");
    } else {
        console.log("Input is NOT checked");
    }
}

getValue();

setInterval(getTime, 1000);

function getTime() {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth();
    let date = time.getDate();
    let day = time.getDay();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "";





    //gets am or pm and adjust from 24h time to 12
    var isChecked = document.getElementById("myonoffswitch").checked;
    if (isChecked) {
        console.log("Input is checked");
    } else {
        console.log("Input is NOT checked");

        if (hour == 12) {
            am_pm = "PM";
        }
        if (hour > 12) {
            hour -= 12;
            am_pm = "PM";
        }
        if (hour == 0) {
            hr = 12;
            am_pm = "AM";
        }
    }

    // gets day of the week
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }

    // gets the month
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August"
            break;
        case 8:
            month = "September"
            break;
        case 9:
            month = "October"
        case 10:
            month = "November"
            break;
        case 11:
            month = "December"
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" +
        min + ":" + sec + " " + am_pm + "\n" + day + " " + date + " " + month + "\n" + year;

    document.getElementById("clock")
        .innerHTML = currentTime;
}

getTime();