document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("nameInput").value;
  var para = new URLSearchParams();
  para.append("EXPERIMENT", name);
  para.append("ORGANISATION_NAME", "chir263");
  window.location.href = `/admin?` + para.toString();
});
