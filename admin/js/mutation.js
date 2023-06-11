let targetNode = document.body;
var observer = new MutationObserver(function (mutationsList, observer) {
  var parentDiv = document.querySelector('[class*="AppHeaderContent"]');
  if (parentDiv) {
    observer.disconnect();
    let user_name =
      JSON.parse(localStorage.getItem("netlify-cms-user"))?.login || "user";
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

  let simulation = [
    "simulation-upload",
    "simulation-upload-css",
    "simulation-upload-js",
    "simulation-upload-images",
  ];

  for (let name of simulation) {
    if (window.location.href.endsWith(name)) {
      element = document.querySelector('[class*="Pane vertical Pane1  "]');
      element.style.width = "100%";
    }
  }
});
observer.observe(targetNode, { childList: true, subtree: true });

var observer1 = new MutationObserver(function (mutationsList, observer) {
  let simulation = [
    "simulation-upload",
    "simulation-upload-css",
    "simulation-upload-js",
    "simulation-upload-images",
  ];

  for (let name of simulation) {
    if (window.location.href.endsWith(name)) {
      observer.disconnect();
      element = document.querySelector('[class*="Pane vertical Pane1  "]');
      element.style.width = "100%";
    }
  }
});
observer1.observe(targetNode, { childList: true, subtree: true });
