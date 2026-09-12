const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", function() {
    document.getElementById("menu").scrollIntoView({behavior:"smooth"
    });
});

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function(button) {

    button.addEventListener("click", function(){

        const menuCard = button.parentElement;
        const foodName = menuCard.querySelector("h3").textContent;

        const phoneNumber = "947xxxxxxxx";

        const message ="Hello, I would like to order " + foodName;

        const whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.open(whatsappURL, "_blank");
    });
});