  

    const exp = document.getElementById("explanation"),
  btn = document.getElementById("home"),
  diagram = document.getElementById("diagram");
exp.addEventListener("mouseover", () => {
  diagram.style.display = "block";
  diagram.style.transformOrigin = "100% 0";
  diagram.style.animation = "fade 0.3s ease-in-out";
  btn.style.opacity = "0";
});
exp.addEventListener("mouseout", () => {
  diagram.style.display = "none";
  btn.style.opacity = "1";
});

    
    
    
  
