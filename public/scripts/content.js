if (window.location.href.includes("twitter.com")) {
    console.log(getTwitterText())
  }

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