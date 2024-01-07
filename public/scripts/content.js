function getChildrenText(elem) {
    return Array.from(elem.children, ({textContent}) => trimAndJoin(textContent)).filter(Boolean).join(' ');
}

function trimAndJoin(textContent) {
    if (textContent == null) {
        return "";
    } else {
        return textContent.trim();
    }
}

function getInstagramText() {
    const textCollection = document.getElementsByClassName("_ap3a _aaco _aacu _aacx _aad7 _aade");
    var textArr = []
    for (var i = 0; i < textCollection.length; i++) {
        textArr.push(getChildrenText(textCollection[i]));
    }
    
    return textArr;
}

function getTwitterText() {
    const textCollection = document.querySelectorAll("[data-testid='tweetText']");
    var textArr = []
    for (var i = 0; i < textCollection.length; i++) {
        textArr.push(getChildrenText(textCollection[i]));
    }
    
    return textArr;
}

function getFacebookText() {
    const textCollection = document.getElementsByClassName("xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a");
    var textArr = []
    for (var i = 0; i < textCollection.length; i++) {
        textArr.push(getChildrenText(textCollection[i]));
    }
    
    return textArr;
}

function getYoutubeText() {
    const textCollection = document.querySelectorAll("#content-text");
    var textArr = []
    for (var i = 0; i < textCollection.length; i++) {
        textArr.push(getChildrenText(textCollection[i]));
    }
    
    return textArr;
}

function getData() {
    if (window.location.href.includes("twitter.com")) {
        return getTwitterText();
    } else if (window.location.href.includes("facebook.com")) {
        return getFacebookText();
    } else if (window.location.href.includes("instagram.com")) {
        return getInstagramText()
    }
    return []
}

// Select the node that will be observed for mutations
const targetNode = document.getElementsByTagName("body")[0];
console.log(targetNode)

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

let global_set = new Set()
let arr = []

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
          let temp = getData();
          const areArraysEqual = (temp, arr) => temp.length === arr.length 
              && temp.every((value, index) => value === arr[index]);
          if (!areArraysEqual(temp, arr)) {
              for (const i of temp) {
                if (!global_set.has(i)) {
                    global_set.add(i);
                    console.log(i)
                }
              }
              arr = temp;
          }
      }
    }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);