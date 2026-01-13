// Hämta knapparna
const readMoreBtn = document.getElementById("readMoreBtn");
const contactBtn = document.getElementById("contactBtn");

// Hämta sektionerna
const moreInfo = document.getElementById("moreInfo");
const contactSection = document.getElementById("contactSection");

// Visa "Läs mer"-sektionen när man klickar
readMoreBtn.addEventListener("click", () => {
    moreInfo.classList.remove("hidden");
    contactSection.classList.add("hidden");
    moreInfo.scrollIntoView({ behavior: "smooth" });
});

// Visa "Kontakta oss"-sektionen när man klickar
contactBtn.addEventListener("click", () => {
    contactSection.classList.remove("hidden");
    moreInfo.classList.add("hidden");
    contactSection.scrollIntoView({ behavior: "smooth" });
});
