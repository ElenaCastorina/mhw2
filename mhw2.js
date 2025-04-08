function toggleText() {
    let extraText = document.querySelector("#extra-text");
    let button = document.querySelector("#toggle-button");

  
    if (extraText.classList.contains("hidden")) {
        extraText.classList.remove("hidden");
        button.textContent = "NASCONDI";
    } else {
        extraText.classList.add("hidden");
        button.textContent = "SCOPRI DI PIÙ";
    }
}
const ScopriDiPiuButton = document.querySelector("#toggle-button");
ScopriDiPiuButton.addEventListener("click", toggleText);




function cambiaImmagine(event) {
    const image = document.querySelector(".nuova-collezione img");
    image.src = "https://amabilejewels.it/media/revslider/Banner_orizzontale.jpg";
}
const button = document.querySelector(".button-newcollection a");
button.addEventListener("click", cambiaImmagine);



function chiamaNotifica() {
    mostraNotifica("Iscrizione effettuata con successo!");
}


function mostraNotifica(messaggio) {
    const notification = document.createElement("div");
    notification.textContent = messaggio;
    notification.classList.add("notifica");
    
    document.body.appendChild(notification);

    notification.addEventListener("click", rimuoviNotifica);
    function rimuoviNotifica() {
        notification.classList.remove("notifica");
    }
}

const newsletterButton = document.querySelector(".submit");
newsletterButton.addEventListener("click", chiamaNotifica);



function showNotification(productName, productPrice) {
    let notification = document.querySelector("#notification-addToCart");
    
    notification.textContent= "Aggiunto al carrello: " + productName + " - " + productPrice;
    notification.classList.remove("hidden"); 
    notification.addEventListener("click", hideNotification);
    function hideNotification() {
        notification.classList.add("hidden");
    }
}

    function setupCartButtons() { 
        let buttons = document.querySelectorAll(".shop-icon");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", handleAddToCartClick);
        }
    }
    setupCartButtons();

    function handleAddToCartClick(event) {
        let product = event.currentTarget;

        let productName = product.dataset.name;
        let productPrice = product.dataset.price;

        showNotification(productName, productPrice);
    }

   

