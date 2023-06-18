// image modal
var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (let i of img) {
  i.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

// user organization form
document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var org_name = document.getElementById("user-inp-org").value;
    var exp_name = document.getElementById("user-inp-rep").value;
    var para = new URLSearchParams();
    para.append("EXPERIMENT", exp_name);
    para.append("ORGANISATION_NAME", org_name);
    window.location.href = `/admin?` + para.toString();
  });

// vlab-cms organisation form
document.getElementById("cmsForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("vlab-inp-rep").value;
  var para = new URLSearchParams();
  para.append("EXPERIMENT", name);
  para.append("ORGANISATION_NAME", "virtual-labs-cms");
  window.location.href = `/admin?` + para.toString();
});
