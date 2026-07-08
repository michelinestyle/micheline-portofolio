function myFunction() {
    const menu = document.getElementById("navbarmenu");
    if (menu.className === "navbar") {
      menu.className += "responsive";
  
    } else {
      menu.className = "navbar";
  
    }
  }
  
  function ArrowFunction(){
  document.getElementById("submenuid").classList.toggle("show");
  }
  
  window.onclick = function (e) {
  if(!e.target.matches('.arrowdown')) {
    var dropdown = document.getElementById("submenuid");
  
  if(dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
    }
  }
  }