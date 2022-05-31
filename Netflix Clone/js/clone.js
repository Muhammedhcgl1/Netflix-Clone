const btn=document.querySelectorAll(".accordion")

var i;
    for (i = 0; i < btn.length; i++) {
      // console.log(btn[i])
      btn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        }
        else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }