
var settings;

let gettingItem = browser.storage.local.get();
gettingItem.then(function(setts){//on success
    settings = setts;
    updateUI(settings);
}, setDefaults);

function setDefaults(){
    browser.storage.local.set({
        BINewWindowButton:2
    });
    gettingItem.then(function(setts){
        settings = setts;
        updateUI(settings);
    }, e => console.log(e));//on error
}


function updateUI(settings){
    const newClickInp = document.querySelector("#newClicks");
    const oldClickInp = document.querySelector("#oldClicks");
    if(!settings.BINewWindowButton){
        browser.storage.local.set({
            BINewWindowButton:2
        });
    }
    if(settings.BINewWindowButton == 2){
        newClickInp.checked = "true";
    }
    else{
        oldClickInp.checked = "true";
    }
}

for (let radio of document.querySelectorAll('input[type="radio"]')) {
    radio.addEventListener("change", e => {
        browser.storage.local.set({
            BINewWindowButton:e.target.value
        });
    })
}