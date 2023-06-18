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
});
observer.observe(targetNode, { childList: true, subtree: true });
let simulation = [
  "simulation-upload",
  "simulation-upload-css",
  "simulation-upload-js",
  "simulation-upload-images",
];
let nonSimulation = [
  "simulation",
  "simulation-css",
  "simulation-js",
  "simulation-images",
];

var observer1 = new MutationObserver(function (mutationsList, observer) {
  let num = 0;
  for (let name of simulation) {
    if (window.location.href.endsWith(name)) {
      let element = document.querySelector('[class*="Pane vertical Pane1  "]');
      let button = document.querySelector(
        '[class*="FileWidgetButton-button-badge-backgroundBadge-badge"]'
      );
      let header = document.querySelector('[class*="ToolbarContainer"]');
      let menu = document.querySelector('[role*="menu"]');
      //
      if (element && button && !menu) {
        num++;
        element.style.width = "100%";
        header.style.zIndex = 99999 + 1;
        button.click();
        let modal = document.querySelector('[class*="StyledModal"]');
        if (modal) {
          modal.style.width = "100%";
          modal.style.height = "90%";
          modal.style.marginTop = "5%";
        }
      }
    }
  }
  var isVisible = true;
  for (let name of nonSimulation) {
    if (window.location.href.endsWith(name)) {
      var ReactModalPortal = document.querySelector("div.ReactModalPortal");
      if (ReactModalPortal) {
        const clickEvent = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        });
        const element = document.elementFromPoint(2, 2);
        element.dispatchEvent(clickEvent);
      }
      let buttons = document.querySelectorAll('[class*="AppHeaderButton"]');
      console.log(buttons);
      if (buttons) {
        var lastButton = buttons[buttons.length - 1];
        if (lastButton) lastButton.style.visibility = "hidden";
        console.log("extracted", lastButton);
      }
      isVisible = false;
    }

    if (isVisible) {
      var lastButton = buttons[buttons.length - 1];
      if (lastButton) lastButton.style.visibility = "visible";
    }
  }
});
observer1.observe(targetNode, { childList: true, subtree: true });

var observer2 = new MutationObserver(function (mutationsList, observer) {
  let CloseButton = document.querySelector('[class*="CloseButton-button"]');
  if (CloseButton) CloseButton.remove();
});
observer2.observe(targetNode, { childList: true, subtree: true });
