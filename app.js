$(document).ready(function() {
    $("button").click(function () {
        $.get("superheroes.php", function(data, status){
            //($("#test").html(data));
            alert(data);            
        })
    });
});

$(document).ready(function() {
    $("input").keyup(function () {
        var heroName = $("input").val();
        $.post("superheroes.php", {
            Superhero: heroName
        }, function(data, status){
            ($("#set").html(data));
            //alert("HELLO"); 
        });
    });
});