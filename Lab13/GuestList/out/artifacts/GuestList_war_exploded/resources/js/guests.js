$(function() {
    console.log("guest.js initialized");
    $("#send").click(updateGuests);
    updateGuests();
});

function updateGuests() {
    let first = $("#first").val();
    let last = $("#last").val();
    $.ajax("guestServlet.ajax", {
        "type": "post",
        "data": {
            "first": first,
            "last": last
        }
    })
    .done(displayGuests)
    .fail(errorHandler);
}

function displayGuests(data) {
    console.log(data);
    if (!data) return;
    let html = "";
    html += '<ul>';
    data.forEach((guest) => {
        html += '<li>' + guest.first +  ' ' + guest.last + '</li>';
    })
    html += '</ul>';
    $("#guestList").html(html);
}

function errorHandler(error){
    console.error(error.message);
}