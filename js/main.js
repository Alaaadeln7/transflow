// start scroll to top

let button = document.querySelector(".scroll-to-top");
window.onscroll = () => {
  if(this.scrollY >= 800){
      console.log("good")
      button.style.display = "flex";
  }else{
      button.style.display = "none";
  }
}
button.onclick = function () {
  window.scrollTo({
      top: 0,
      behavior:"smooth",
  });
}
// end scroll to top

// start bar section
let bar = document.querySelector(".bar");
let links = document.querySelector(" nav ul")
// end bar section