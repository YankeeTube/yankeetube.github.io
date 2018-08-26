function deviceCheck(){
    var filter = "win16|win32|win64|mac|macintel"; 
    if ( navigator.platform ) { 
        if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
            //mobile 
            window.location.href="/ready.html"
        } else { 
            //pc 
        } 
    }
}
deviceCheck();
