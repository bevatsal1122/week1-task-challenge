var x=document.getElementById("go-btn");
var name;
x.addEventListener("click", () => {
  var y=document.getElementById("name-text").value;
  if (y==="")
  {
    alert("Please Enter Name !!");
  }
  else
  {
      name=y;
      location="K:/Month%20of%20Mern%202022/Week%201/Task/index.html"
  }
});
