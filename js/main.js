/*
==========================================================
Melrose Fire Company Training Portal
Main JavaScript
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Melrose Training Portal Loaded");

    // Highlight current page in navigation
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {
            link.classList.add("active");
        }

    });

});