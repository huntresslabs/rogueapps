var expandedIndex = null;

function toggleExpandCard(index) {
    var overlay = document.getElementById("expanded-overlay");
    var expandedEl = document.getElementById("expanded-card");
    var grid = document.getElementById("card-grid");

    if (expandedIndex === index) {
        // Collapse
        overlay.style.display = "none";
        grid.classList.remove("hidden");
        expandedIndex = null;
        return;
    }

    var card = document.querySelector('.card[data-index="' + index + '"]');
    if (!card) return;

    // Clone card content into the overlay
    expandedEl.innerHTML = card.innerHTML;
    // Show the details in the expanded view
    var details = expandedEl.querySelector(".card-details");
    if (details) details.style.display = "";

    overlay.style.display = "flex";
    grid.classList.add("hidden");
    expandedIndex = index;

    // Close when clicking the overlay or expanded card
    overlay.onclick = function () {
        overlay.style.display = "none";
        grid.classList.remove("hidden");
        expandedIndex = null;
    };
}
