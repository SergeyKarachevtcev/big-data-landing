(()=>{"use strict";console.log("sideMenu"),function(){const e=document.querySelectorAll(".tablink");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){var e=this.dataset.tab,t=document.getElementById(e),l=document.querySelectorAll(".tabcontent"),n=document.querySelectorAll(".tablink");for(let e=0;e<l.length;e++)l[e].style.display="none";for(let e=0;e<l.length;e++)n[e].classList.remove("active");t.style.display="block",this.classList.add("active")}));document.querySelector(".tablink").click()}()})();