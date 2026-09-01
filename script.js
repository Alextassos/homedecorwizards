document.addEventListener("DOMContentLoaded", () => {
    // ΔΙΟΡΘΩΘΗΚΕ: Χρησιμοποιούμε *= αντί για $= ώστε να πιάνει το .html ακόμη κι αν ακολουθεί / ή παραμέτρους στα κινητά
    const links = document.querySelectorAll('a[href*=".html"]');

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetUrl = link.getAttribute("href");

            // Έλεγχος αν το link είναι έγκυρο και δεν ανοίγει σε νέο παράθυρο
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
    if (event.persisted) {
        document.body.classList.remove("fade-out");
    }
});
