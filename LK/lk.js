function showTab(tabName) {
    var tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(function(tab) {
      if (tab.id === tabName) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });

    var links = document.querySelectorAll(".sidebar a");
    links.forEach(function(link) {
      if (link.getAttribute("href") === "#" + tabName) {
        link.parentElement.classList.add("active");
      } else {
        link.parentElement.classList.remove("active");
      }
    });
  }