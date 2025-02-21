const main = document.querySelector(".main-1");
const menu = document.querySelector("#menu");
const cross = document.querySelector(".fa-xmark");
const blurs = document.querySelector(".blur");
const side = document.querySelector(".hdn-side");

menu.addEventListener("click", () => {
    blurs.classList.add("active");
    side.classList.add("active");
});

cross.addEventListener("click", () => {
    blurs.classList.remove("active");
    side.classList.remove("active");
});

const h1 = document.querySelector(".head-1");
const h2 = document.querySelector(".head-2");
const h3 = document.querySelector(".head-3");
const h4 = document.querySelector(".head-4");
const h5 = document.querySelector(".head-5");
const h6 = document.querySelector(".head-6");
const l1 = document.querySelector(".login-1");
const l2 = document.querySelector(".login-2");
const l3 = document.querySelector(".login-3");
const l4 = document.querySelector(".login-4");
const l5 = document.querySelector(".login-5");
const l6 = document.querySelector(".login-6");

// Elements for Custom Order and Existing Inventory buttons
const customOrderButton = document.querySelector("#order");
const existingInventoryButton = document.querySelector("#invn");

main.addEventListener("scroll", () => {
    const unit = main.scrollTop;

    // Reset all headers and logins
    [h1, h2, h3, h4, h5, h6].forEach((h) => h.classList.remove("active", "hide"));
    [l1, l2, l3, l4, l5, l6].forEach((l) => l.classList.remove("active", "hide"));

    // Logic for "Custom Order" and "Existing Inventory" buttons visibility
    if (unit >= 0 && unit < 1300) {
        customOrderButton.style.display = "block";
        existingInventoryButton.style.display = "block";
    } else {
        customOrderButton.style.display = "none";
        existingInventoryButton.style.display = "none";
    }

    // Set the visible header and login based on the scroll position
    if (unit >= 0 && unit < 600) {
        h1.classList.remove("hide");
        l1.classList.remove("hide");
    } else {
        h1.classList.add("hide");
        l1.classList.add("hide");
    }

    if (unit >= 600 && unit < 1300) {
        h2.classList.add("active");
        l2.classList.add("active");
    } else {
        h2.classList.remove("active");
        l2.classList.remove("active");
    }

    if (unit >= 1300 && unit < 1900) {
        h3.classList.add("active");
        l3.classList.add("active");
    } else {
        h3.classList.remove("active");
        l3.classList.remove("active");
    }

    if (unit >= 1900 && unit < 2600) {
        h4.classList.add("active");
        l4.classList.add("active");
    } else {
        h4.classList.remove("active");
        l4.classList.remove("active");
    }

    if (unit >= 2600 && unit < 3200) {
        h5.classList.add("active");
        l5.classList.add("active");
    } else {
        h5.classList.remove("active");
        l5.classList.remove("active");
    }

    if (unit >= 3200) {
        h6.classList.add("active");
        l6.classList.add("active");
    } else {
        h6.classList.remove("active");
        l6.classList.remove("active");
    }
});
