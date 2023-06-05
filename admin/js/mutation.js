let targetNode = document.body;
var observer = new MutationObserver(function (mutationsList, observer) {
  let user_name =
    JSON.parse(localStorage.getItem("netlify-cms-user"))?.login || "user";

  var parentDiv = document.querySelector('[class*="AppHeaderContent"]');

  if (parentDiv) {
    observer.disconnect();
    var newDiv = document.createElement("span");
    newDiv.className = "user_name";
    newDiv.innerHTML = `${user_name}`;
    var navTag = parentDiv.querySelector("img");
    if (navTag) {
      navTag.insertAdjacentElement("beforebegin", newDiv);
    } else {
      parentDiv.appendChild(newDiv);
    }
  }
});
observer.observe(targetNode, { childList: true, subtree: true });
