$(document).ready(function(){
    $.getJSON("facultyList.json", function (data) {
        $.each(data,function() {
            $("#faculty").append(
                "<img src= '" + value.image + "'><br>" +
                "<h2" + value.full_name + "</h2>" +
                "<h3>" + value.department + "</h3>" +
                "<p>" + value.bio + "</p>"
            );
        });
    });
});
