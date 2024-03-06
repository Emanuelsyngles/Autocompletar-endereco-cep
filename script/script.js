const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighboorhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");

const closeButton = document.querySelector("#close-message");

// Validate CEP input
cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]|\./;
    const key = String.fromCharCode(e.keyCode);

    if(!onlyNumbers.test(key)) {
        e.preventDefault();
        return;
    }
})

cepInput.addEventListener("keyup", (e) => {

    const inputValue = e.target.value

    if(inputValue.length === 8) {
        getAddress(inputValue);
    }
});

const getAddress = async (cep) => {
    toggleLoader();

    cepInput.blur()

    
};

const toggleLoader = () => {
    
    const fadeElement = document.querySelector("#fade")
    const loaderElement = document.querySelector("#loader")

    fadeElement.classList.toggle("hide");
    loaderElement.classList.toggle("hide");
}
