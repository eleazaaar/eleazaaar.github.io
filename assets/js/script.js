function displayProjects() {
    $("#displayProject").css({ "background-color": "white", "color": "black" });
    $("#projects").show();
    $("#activities").hide();
}

function displayActivities() {
    $("#activities").show();
    $("#projects").hide();
}