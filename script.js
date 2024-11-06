document.addEventListener("DOMContentLoaded", function() {
    var pageName = window.location.pathname.split("/").pop();
    if (sessionStorage.getItem("gdprAccepted_" + pageName)!== "true") {    
    var banner = document.createElement("div");
    banner.style.position = "fixed";
    banner.style.bottom = "20px";
    banner.style.right = "20px";
    banner.style.padding = "15px";
    banner.style.backgroundColor = "gray";
    banner.style.color = "#black";
    banner.style.borderRadius = "5px";
    banner.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    banner.style.zIndex = "1000";
    banner.innerHTML = `
        <p>Siamo i cookie per migliorare la tua esperienza</p>
        <p>(O almeno così dicono)</p>
        <p><a href="https://www.garanteprivacy.it/il-testo-del-regolamento" target="_blank" style="color: white;">Learn more</a></p>
        <button id="gdpr-decline" style="background-color: black; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px;">Decline</button>
        <button id="gdpr-accept" style="background-color: black; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px;">Accept</button>
    `;

    document.body.appendChild(banner);

    document.getElementById("gdpr-accept").addEventListener("click", function() {
        sessionStorage.setItem("gdprAccepted_" + pageName, "true");
        banner.style.display = "none";
    });

    document.getElementById("gdpr-decline").addEventListener("click", function() {
        sessionStorage.setItem("gdprAccepted_" + pageName, "false");
        banner.style.display = "none";
    });
    }
});