function displayProjects() {
    resetAttributes();
    $("#btnProjects").css({ "background-color": "white", "color": "black" });
    $("#projects").show();
}

function displayActivities() {
    resetAttributes();
    $("#btnActivities").css({ "background-color": "white", "color": "black" });
    $("#activities").show();
}

function displaySeminars() {
    resetAttributes();
    $("#btnSeminars").css({ "background-color": "white", "color": "black" });
    $("#seminars").show();
}

function resetAttributes() {
    $("#btnProjects").css({ "background-color": "rgba(0, 0, 0, 0)", "color": "white" });
    $("#btnActivities").css({ "background-color": "rgba(0, 0, 0, 0)", "color": "white" });
    $("#btnSeminars").css({ "background-color": "rgba(0, 0, 0, 0)", "color": "white" });
    $("#projects").hide();
    $("#activities").hide();
    $("#seminars").hide();
}
