var bookmTr = browser.bookmarks.getTree(function(tree){
    var bookm = tree[0].children[1].children;
    for(var i = 0; i<bookm.length; i++){
        var item = bookm[i];
        try{
            var aEl = document.createElement("a");
            aEl.setAttribute("to",item.url);
            aEl.onclick = function() {
                var creating = browser.tabs.create(
                    { url: this.getAttribute("to")}
                );
            };

            var slidx=item.url.indexOf("//");            
            var imgEl = document.createElement("img");
            imgEl.setAttribute("src", "http://www.google.com/s2/favicons?domain="+item.url.slice(slidx+2,item.url.length));

            var descEl = document.createElement("div");
            descEl.classList.add('description');
            descEl.innerText = item.title.length> 15 ? item.title.slice(0,15)+'...': item.title;

            aEl.appendChild(imgEl);
            aEl.appendChild(descEl);
            document.getElementById("wrapper").appendChild(aEl);
        }
        catch{}
    }
});
