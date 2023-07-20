function Randomizer() {
    var val = document.getElementById("api-select").value;
    var eng_name = document.getElementById("eng_name");
    var cuisine = document.getElementById("cuisine");
    var paragraph = document.getElementById("paragraph");
    var milk = document.getElementById("milk");
    var nut = document.getElementById("nut");
    var seafood = document.getElementById("seafood");
    var spicy = document.getElementById("spicy");
    var meat = document.getElementById("meat");

    if (val !== "Country?") {
        fetch(`./food/${val}-food.json`)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    // Generate a random index between 0 and data.length - 1
                    const randomIndex = Math.floor(Math.random() * data.length);

                    // Get the randomly selected item from the array
                    const randomData = data[randomIndex];

                    // Use the randomly selected data
                    console.log(randomData);
                    cuisine.innerText = randomData.cuisine; 
                    cuisine.classList.remove("hidden");
                    eng_name.innerText = randomData.eng_name;
                    eng_name.appendChild(cuisine);
                    paragraph.innerText = "";

                    milk.classList.toggle("hidden", !randomData.contain_milk);
                    nut.classList.toggle("hidden", !randomData.contain_nut);
                    seafood.classList.toggle("hidden", !randomData.seafood);
                    spicy.classList.toggle("hidden", !randomData.spicy);

                    if(Array.isArray(randomData.meat) && randomData.meat.length > 0){
                        meat.classList.remove("hidden");
                        meat.innerText = randomData.meat;
                    }
                    else{
                        meat.classList.remove("hidden");
                        meat.innerText = "Vegetarian";
                    }
                    
                } else {
                    console.error('JSON data is empty or not an array.');
                }
            })
            .catch(error => console.error('Error fetching the JSON file:', error));
    }
}
