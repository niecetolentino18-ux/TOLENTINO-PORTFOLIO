// Small helpers: active nav, year, contact form mailto
(function () {
  var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
  });
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var n = document.getElementById("cName").value.trim();
      var em = document.getElementById("cEmail").value.trim();
      var m = document.getElementById("cMsg").value.trim();
      var subject = encodeURIComponent("Portfolio inquiry from " + n);
      var body = encodeURIComponent("Name: " + n + "\nEmail: " + em + "\n\n" + m);
      location.href = "mailto:niecetolentino@nmsc.edu.ph?subject=" + subject + "&body=" + body;
    });
  }
})();
