(function () {
  var body = document.body;
  var themeBtn = document.getElementById("themeBtn");
  var clickBtn = document.getElementById("clickBtn");
  var countEl = document.getElementById("count");
  var count = 0;

  // Live info
  var urlEl = document.getElementById("url");
  var timeEl = document.getElementById("time");
  var yearEl = document.getElementById("year");
  if (urlEl) urlEl.textContent = window.location.href;
  if (timeEl) timeEl.textContent = new Date().toLocaleString();
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Dark mode toggle (kept in memory only)
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      body.classList.toggle("dark");
    });
  }

  // Click counter
  if (clickBtn && countEl) {
    clickBtn.addEventListener("click", function () {
      count += 1;
      countEl.textContent = count;
    });
  }
})();
