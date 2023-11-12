$(document).ready(function() {
    $("button").click(function () {
        $.get("superheroes.php", function(data, status){
            //$("#test").html(data);
            alert(data);            
        })
    });
});
