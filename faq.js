var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      // Закрываем другие открытые панели
      var panels = document.getElementsByClassName("panel");
      for (var j = 0; j < panels.length; j++) {
        if (panels[j] !== this.nextElementSibling) {
          panels[j].style.maxHeight = null;
          panels[j].previousElementSibling.classList.remove("active");
        }
      }

      // Открываем или закрываем текущую панель
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }