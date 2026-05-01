function calculate(){
  let r = +document.getElementById("radius").value;
  let output = document.getElementById("output");

  if(r <= 0){
    output.innerHTML = "Please enter a valid radius!";
    output.style.color = "red";
    return;
  }

  let circumference = 2 * 3.142 * r;
  let area = 3.142 * r * r;

  output.innerHTML =
    "The circumference is: " + circumference.toFixed(2) + "<br>" +
    "The area is: " + area.toFixed(2);
}