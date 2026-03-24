document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("search-input");
    if (!input) return;

    var meta = document.getElementById("search-meta");
    var noResults = document.getElementById("no-results");
    var cards = document.querySelectorAll("#card-grid .card");
    var total = cards.length;
    var debounceTimer = null;

    function performSearch() {
        var term = input.value.toLowerCase().trim();
        var visible = 0;

        cards.forEach(function (card) {
            if (!term) {
                card.style.display = "";
                visible++;
                return;
            }
            var searchable = [
                card.getAttribute("data-name") || "",
                card.getAttribute("data-description") || "",
                card.getAttribute("data-contributors") || "",
                card.getAttribute("data-mitre") || "",
                card.getAttribute("data-tags") || "",
                card.getAttribute("data-permissions") || "",
            ].join(" ");
            var match = searchable.indexOf(term) !== -1;
            card.style.display = match ? "" : "none";
            if (match) visible++;
        });

        if (meta) {
            meta.textContent = term ? "Showing " + visible + " of " + total + " apps" : "";
        }
        if (noResults) {
            if (visible === 0 && term) {
                noResults.classList.add("visible");
            } else {
                noResults.classList.remove("visible");
            }
        }
    }

    input.addEventListener("input", function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(performSearch, 150);
    });
});
