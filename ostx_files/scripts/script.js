
function displayDate() {
    var today = new Date();
    var options = { year: "numeric", month: "long", day: "numeric" };
    var userLanguage = navigator.language || navigator.userLanguage;
    var date = today.toLocaleDateString(userLanguage, options);
    document.getElementById("date").innerHTML = date; 
}

var monthNames = "Január, Február, Március, Április, Május, Június, Július, Augusztus, Szeptember, Október, November, December".split(",");

function updateMonthAndDate(offsetDays) {
    var today = new Date();
    var targetDate = new Date(today.getTime() - offsetDays * 86400000);
    var month = monthNames[targetDate.getMonth()];
    var day = targetDate.getDate();
    return month + " " + day;
}

function setActiveOrderTypeButton() {
    $(".orderType").on("click", ".orderTypeButton", function () {
        $(this).addClass("orderTypeButtonActive").siblings().removeClass("orderTypeButtonActive");
    });
}

function updateSendOrderButton(text) {
    document.getElementById("send_order_button").innerHTML = text;
}

function updateTime() {
    var dateToday = new Date();
    var timeZone = dateToday.getTimezoneOffset();
    var timerSec = Math.ceil((dateToday / 1000 / 60 - timeZone) / 60 / 24) * 60 * 60 * 24 - Math.floor(dateToday / 1000 - timeZone * 60);
    var amount = timerSec;
    let hours = Math.floor(amount / 60 / 60);
    let mins = Math.floor((amount / 60) % 60);
    let secs = Math.floor(amount % 60);
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    $(".hours").html(hours);
    $(".mins").html(mins);
    $(".secs").html(secs);
}

jQuery(document).ready(function () {
    $("a:not(.noactive), .to_form").on("click touch", function (e) {
        e.preventDefault();
        $("body,html").animate({
            scrollTop: $("#order_form").offset().top - 50,
        }, 200);
    });

    $("a.noactive").on("click", function (e) {
        e.preventDefault();
    });
});

// Виклики функцій
displayDate();
updateSendOrderButton("Lorem Ipsum");
setActiveOrderTypeButton();
updateTime();
setInterval(updateTime, 1000);


function GetCount() {
    var dateToday = new Date()
    var timeZone = dateToday.getTimezoneOffset()
    var timerSec =
        Math.ceil((dateToday / 1000 / 60 - timeZone) / 60 / 24) *
        60 *
        60 *
        24 -
        Math.floor(dateToday / 1000 - timeZone * 60)
    var amount = timerSec
    let hours = Math.floor(amount / 60 / 60)
    let mins = Math.floor((amount / 60) % 60)
    let secs = Math.floor(amount % 60)
    if (hours < 10) hours = "0" + hours
    if (mins < 10) mins = "0" + mins
    if (secs < 10) secs = "0" + secs
    $(".hours").html(hours)
    $(".mins").html(mins)
    $(".secs").html(secs)
}
GetCount()
setInterval(GetCount, 1000)

