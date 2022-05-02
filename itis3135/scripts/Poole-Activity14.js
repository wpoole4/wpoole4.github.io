$(document).ready(function() {
    $("#nav_list li").click(function (){
        let name = $(this).children("a").attr("title");
        let fileName = $.get(name + ".json");
        $.ajax( {
            type: "get",
            url: fileName,
            dataType: "json",
            success: function(fileName){

            let data = $.parseJSON(fileName);
            $("main > h1").html(data.speakers[0].title);
            $("main > h2").html(data.speakers[0].month);
            $("main > h3").html(data.speakers[0].speaker);
            $("main > img").attr("src", data.speakers[0].image);
            $("main > p").html(data.speakers[0].text);
        }
        });
    });
    });
     // end ready