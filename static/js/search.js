document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("search-input");
    if (!input) return;

    input.addEventListener("input", function () {
        var term = this.value.toLowerCase();
        var cards = document.querySelectorAll("#card-grid .card");
        cards.forEach(function (card) {
            var searchable = [
                card.getAttribute("data-name") || "",
                card.getAttribute("data-description") || "",
                card.getAttribute("data-contributors") || "",
                card.getAttribute("data-mitre") || "",
                card.getAttribute("data-tags") || "",
                card.getAttribute("data-permissions") || "",
            ].join(" ");
            card.style.display = searchable.indexOf(term) !== -1 ? "" : "none";
        });
    });
});
