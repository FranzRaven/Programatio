(function () {
  "use strict";

  // Adjust parent's height so element has room to float
  var adjustHeight = function (params) {
    let s = params.hasOwnProperty("stickyElem") ? params.stickyElem : null;
    let footerH = params.hasOwnProperty("footer") ? params.footer : 100;

    if (s === null) {
      return;
    }

    let bodyH = document.body.offsetHeight;
    let parentH = s.parentElement.offsetHeight;
    let parentCoord = getCoordinates(s.parentElement);
    let newParentH = bodyH - parentCoord.top - footerH;

    // Adjust height
    s.parentElement.style.height = newParentH + "px";

    let newBodyH = document.body.offsetHeight;
    if (newBodyH > bodyH) {
      // increased height too much, revert and try again w/ increased footer height
      s.parentElement.style.height = parentH + "px";
      let diff = newBodyH - bodyH;
      let marginOfSafety = 100;
      params.footer = footerH + diff + marginOfSafety;
      adjustHeight(params);
    }
    else if (newBodyH < bodyH) {
      // Honey, We Shrunk the Page. Revert
      s.parentElement.style.removeProperty('height');
    }
    return;
  };

  var getCoordinates = function (elem) {
    let rect = elem.getBoundingClientRect();

    return {
      top: rect.top + window.pageYOffset,
      right: rect.right + window.pageXOffset,
      bottom: rect.bottom + window.pageYOffset,
      left: rect.left + window.pageXOffset,
    };
  };

  var adjustOverflow = function (s) {
    var computedStyle;
    while (s) {
      s = s.parentElement;
      computedStyle = getComputedStyle(s);
      if (computedStyle.overflow != "visible") {
        s.style.overflow = "visible";
      }
      if (s.nodeName == "BODY") break;
    }
  };

  // Observe height changes and readjust as necessary
  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      // Check if greater than 1% height change
      if (Math.abs(entry.contentRect.height - bodyHeight) / bodyHeight > 0.01) {
        var elements = document.getElementsByClassName("ez-sticky");
        if (typeof elements != "undefined" && elements.length > 0) {
          // Stop observing height changes while we adjust height
          observer.unobserve(document.querySelector("body"));
          params.stickyElem = elements[0];
          adjustHeight(params);
          bodyHeight = entry.contentRect.height;
          // Resume observing height changes
          observer.observe(document.querySelector("body"));
        }
      }
    }
  });

  var params = {};
  var bodyHeight = document.body.offsetHeight;
  var elements = document.getElementsByClassName("ez-sticky");
  if (typeof elements != "undefined" && elements.length > 0) {
    params.stickyElem = elements[0];
    adjustOverflow(elements[0]);
    adjustHeight(params);
    observer.observe(document.querySelector("body"));
  }
})();
