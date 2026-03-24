document.addEventListener("DOMContentLoaded", function () {
    var grid = document.getElementById("contributor-grid");
    if (!grid) return;

    fetch("/rogueapps.json")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            var contributorMap = {};
            data.forEach(function (app) {
                if (!Array.isArray(app.contributors)) return;
                app.contributors
                    .filter(function (c) { return c !== "Huntress Research Team"; })
                    .forEach(function (contributor) {
                        contributorMap[contributor] = (contributorMap[contributor] || 0) + 1;
                    });
            });

            var contributors = Object.keys(contributorMap).map(function (name) {
                return { name: name, count: contributorMap[name] };
            });

            grid.innerHTML = contributors.map(function (c) {
                return '<div class="contributor-item">' +
                    '\uD83D\uDD25 ' + c.name +
                    ' <span class="yellow-text">x ' + c.count + '</span>' +
                    '</div>';
            }).join("");
        });
});
