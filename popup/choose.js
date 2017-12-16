console.log("New instance");
    
var bookmTr = browser.bookmarks.getTree(function(tree){
    var bookm = tree[0].children[1].children;
    //console.log(bookm[0]);
    for(var i = 0; i<bookm.length; i++){
        var item = bookm[i];
        //console.log(item);
        try{
            console.log("###");
            var aEl = document.createElement("a");
            aEl.setAttribute("to",item.url);
            aEl.onclick = function() {
                
                //console.log("binding "+ this.getAttribute("to"));
                var creating = browser.tabs.create(
                    { url: this.getAttribute("to")}
                );
            };
            console.log(aEl);

            var slidx=item.url.indexOf("//");            
            var imgEl = document.createElement("img");
            imgEl.setAttribute("src", "http://www.google.com/s2/favicons?domain="+item.url.slice(slidx+2,item.url.length));
            console.log(imgEl);

            var descEl = document.createElement("div");
            descEl.classList.add('description');
            descEl.innerText = item.title.length> 15 ? item.title.slice(0,15)+'...': item.title;
            console.log(descEl);

            aEl.appendChild(imgEl);
            aEl.appendChild(descEl);
            document.getElementById("wrapper").appendChild(aEl);

            /*
            //console.log(s);
            $(".wrapper").append(s);*/
        }
        catch{}
    }
    console.log(document.getElementById("wrapper"));
});
    
    // var page = browser.extension.getBackgroundPage()
    // console.log(page.location);


console.log($("#wrapper"));
