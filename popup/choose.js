var TREE;

function createBMbuttons(Tree,wrapper){
    console.log(Tree);
    for(var i = 0; i<Tree.length; i++){
        var item = Tree[i];
        try{
            var aEl = document.createElement("a");
            var imgEl = document.createElement("img");
            var descEl = document.createElement("div");
            descEl.classList.add('description');

            if(item.url == undefined){ 
                imgEl.setAttribute("src", "folder.png");
                var tNode = Tree[i].children;
                //console.log(tNode);
                aEl.onclick = function(){
                    createBMbuttons(tNode,descEl);
                }
                //console.log(item.title);
            }
            else{
                console.log(item.title);
                aEl.setAttribute("to",item.url);
                aEl.onclick = function() {
                    var creating = browser.tabs.create(
                        { url: this.getAttribute("to")}
                    );
                };
                var slidx=item.url.indexOf("//");
                imgEl.setAttribute("src", "http://www.google.com/s2/favicons?domain="+item.url.slice(slidx+2,item.url.length));

                descEl.innerText = item.title.length> 15 ? item.title.slice(0,15)+'...': item.title;
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

var bookmTr = browser.bookmarks.getTree(function(tree){
    TREE = tree;
    var bookm = TREE[0].children[1].children;
    createBMbuttons(bookm,document.getElementById("wrapper"));
});
