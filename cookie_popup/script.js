function checkCookieConsent() {
    return localStorage.getItem("cookieConsent") === "true";
}

function showCookiePopup() {
    const popup = document.querySelector(".cookie_popup"); 
    popup.style.display = "block";

}

function acceptCookies() {
    localStorage.setItem("cookieConsent", "true");
    const popup = document.querySelector(".cookie_popup");
    popup.style.display = "none";
}

document
    .querySelector(".accept")
    .addEventListener("click", acceptCookies);

if (!checkCookieConsent()) {
    showCookiePopup();
}
