if(document.title.indexOf('videos') != -1) {        // Checking the title to redirect
    window.location='https://www.google.com' ;
}

var metaDesc = document.querySelector('meta[name="description"]');  // checking whether meta name is description 
if(metaDesc){
    var metaDescContent = metaDesc.getAttribute("content");
    if(metaDescContent && metaDescContent.indexOf('videos') != -1) { // checking meta content has videos so that we can redirect.
        window.location='https://www.google.com' ;
    }
}
