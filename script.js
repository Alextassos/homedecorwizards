document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href$=".html"]');

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetUrl = link.getAttribute("href");

            if (targetUrl && !targetUrl.startsWith("#") && !link.hasAttribute("target")) {
                e.preventDefault(); 

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 400);
            }
        });
    });
});

// 🔥 Η ΔΙΟΡΘΩΣΗ ΓΙΑ ΤΟ ΒΕΛΑΚΙ "ΠΙΣΩ" (BFCACHE FIX)
window.addEventListener("pageshow", (event) => {
    // Αν η σελίδα φορτώθηκε από το ιστορικό/cache του browser
    if (event.persisted) {
        // Αφαιρούμε την κλάση για να μην μένει κρυφή/αόρατη η σελίδα
        document.body.classList.remove("fade-out");
        
        // Ή αν προτιμάς να τραβάει φρέσκο HTML, απλά κάνεις σχόλιο από πάνω και ξεσχολιάζεις από κάτω:
        // window.location.reload();
    }
});
