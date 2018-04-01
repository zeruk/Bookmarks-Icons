var TREE,tNodes = [];
var mLS = window.localStorage;

var settings;
var bookmTr;

let gettingItem = browser.storage.local.get();
gettingItem.then(function(setts){//on success
    settings = setts;
    createAll();
}, setDefaults);

function setDefaults(){
    browser.storage.local.set({
        BINewWindowButton:2
    });
    gettingItem.then(function(setts){
        settings = setts;
        createAll();
    }, e => console.log(e));//on error
}

function createAll(){
    bookmTr = browser.bookmarks.getTree(function(tree){
        TREE = tree;
        var bookm = TREE[0].children[1].children;
        createBMbuttons(bookm,document.getElementById("wrapper"));
    });
}


function createBMbuttons(Tree,wrapper,limNum = 45){
    for(var i = 0; i<Tree.length && i < limNum; i++){
        var item = Tree[i];
        //console.log(item.url);
        try{
            var aEl = document.createElement("a");
            var imgEl = document.createElement("img");
            var descEl = document.createElement("div");
            descEl.classList.add('description');

            if(item.url == undefined){ 
                aEl.setAttribute("N",tNodes.length+1);
                imgEl.setAttribute("src", "folder.png");
                createBMbuttons(Tree[i].children,descEl,12);
                aEl.classList.add('white');
            }
            else if(item.url == 'data:'){
                aEl.setAttribute("N",tNodes.length+1);
                imgEl.setAttribute("src", "separator.png");
                imgEl.classList.add('sep');
                aEl.classList.add('white');
            }
            else{
                aEl.setAttribute("to",item.url);
                aEl.onmousedown = function(e) {
                    console.log(e.which);
                    if(e.which == Number(settings.BINewWindowButton)){
                        console.log("new tab");
                        var creating = browser.tabs.create(
                            { url: this.getAttribute("to")}
                        );
                    }
                    else{
                        console.log("old tab");
                        var gettingCurr = browser.tabs.getCurrent()
                        var upd = browser.tabs.update(gettingCurr.id,
                        {
                            url: this.getAttribute("to")
                        });
                    }
                };
                var slidx=item.url.indexOf("//");
                imgEl.setAttribute("src", "http://www.google.com/s2/favicons?domain="+item.url.slice(slidx+2,item.url.length));

                descEl.innerText = item.title.length> 15 ? item.title.slice(0,15)+'...': item.title;
                descEl.classList.add('text');
            }

            aEl.appendChild(imgEl);
            aEl.appendChild(descEl);
            wrapper.appendChild(aEl);
        }
        catch(err){
            ;
        }
    }
}
