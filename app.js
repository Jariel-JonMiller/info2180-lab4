document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".btn"); 

    button.addEventListener("click", function() {
        var userInput = document.getElementById("Superheroname").value; 
        var result = document.querySelector(".result");

        fetch('superheroes.php?query=' + userInput)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                result.innerHTML = data;

                var Results = document.createElement("h2");
                result.insertBefore(Results, result.firstChild); 
            })
    })
})