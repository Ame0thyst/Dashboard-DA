document.querySelectorAll(".kaurukaanibox .a-info .k-link").forEach(function (e) {
    var t = e.textContent.split(", "),
        n = document.createElement("div");
    t.forEach(function (e, a) {
        var r = document.createElement("a");
        r.textContent = e;
        r.setAttribute("href", "/search?q=" + e + "&max-results=12");
        n.appendChild(r);
        a < t.length - 1 && n.appendChild(document.createTextNode(", "));
    });
    e.innerHTML = "";
    e.appendChild(n);
});
