document.addEventListener('DOMContentLoaded', function(){
    Array.prototype.forEach.call(document.querySelectorAll("#form_error_message_frontend + div > div:last-child label"), function(e){
        var mLS = window.localStorage;
        if(mLS.getItem("BINewWindowButton")==2)
            e.setAttribute("checked","true");
        console.log(e);
    });
});

function check(n){
    var mLS = window.localStorage;
    mLS.setItem("BINewWindowButton",string(n));
    console.log(n);
}