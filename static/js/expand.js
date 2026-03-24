var expandedIndex = null;

function closeExpandedCard() {
    var overlay = document.getElementById("expanded-overlay");
    var grid = document.getElementById("card-grid");
    if (!overlay) return;
    overlay.classList.remove("open");
    if (grid) grid.classList.remove("hidden");
    document.body.style.overflow = "";
    expandedIndex = null;
}

function toggleExpandCard(index) {
    var overlay = document.getElementById("expanded-overlay");
    var expandedEl = document.getElementById("expanded-card");
    var grid = document.getElementById("card-grid");

    if (expandedIndex === index) {
        closeExpandedCard();
        return;
    }

    var card = document.querySelector('.card[data-index="' + index + '"]');
    if (!card) return;

    // Clone card content into the overlay
    expandedEl.innerHTML = card.innerHTML;

    // Inject close button
    var closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        closeExpandedCard();
    });
    expandedEl.insertBefore(closeBtn, expandedEl.firstChild);

    // Show the details in the expanded view
    var details = expandedEl.querySelector(".card-details");
    if (details) details.style.display = "";

    // Remove line-clamp on expanded description
    var desc = expandedEl.querySelector(":scope > p");
    if (desc) desc.style.webkitLineClamp = "unset";

    overlay.classList.add("open");
    if (grid) grid.classList.add("hidden");
    document.body.style.overflow = "hidden";
    expandedIndex = index;

    // Close on overlay background click (not on card itself)
    overlay.onclick = function (e) {
        if (e.target === overlay) {
            closeExpandedCard();
        }
    };

    // Stop propagation on expanded card
    expandedEl.onclick = function (e) {
        e.stopPropagation();
    };
}

// Escape key listener
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && expandedIndex !== null) {
        closeExpandedCard();
    }
});
