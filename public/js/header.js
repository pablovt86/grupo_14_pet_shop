

// let navBar = document.querySelector("#navigation-bar-mobile")
function tach(){
    document.getElementById("search-hidden").style.display = "none"

    
  }
  function search(){
    document.getElementById("search-hidden").style.display = "block" 
   
    }
  function containerHidden(){

    document.getElementById("container-hidden").style.display = "block"
    // document.querySelector('#demo-id');
  }
  function endTable(){
    document.getElementById("container-hidden").style.display = "none"
    
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      document.querySelector(".main-header").classList.add("header-opacity");
    } else {
      document.querySelector(".main-header").classList.remove("header-opacity");
    }
  });



