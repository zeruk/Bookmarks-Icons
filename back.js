
console.log("hello from backgr");

function bmiconsOpen(UR){
    console.log("WAU");
    browser.tabs.update({url: UR});
}

//bmiconsOpen("http://google.com");

/*

,
  "background":{
    "scripts": ["back.js"]
  }

  */