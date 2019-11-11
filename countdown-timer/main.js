var timeleft = 5;  //Set the time we're counting down to
var countdownContainer = document.createElement('div');
countdownContainer.id = 'countdownContainer';
document.getElementById("hplogo").style.paddingTop = '0px'; //existingnode
document.getElementById("lga").insertBefore(countdownContainer, document.getElementById("hplogo"))
var downloadTimer = setInterval(function(){                                                                           
    document.getElementById("countdownContainer").innerHTML = "<div> Countdown </div>" + "<div>" + timeleft + "</div>" + "<div>Secs</div>";    // Display the result in the element with id="countdowntimer"
    timeleft--;           // Update the count down every 1 second
    if(timeleft <= 0 ) {
        clearInterval(downloadTimer);
        window.location='https://news.google.co.in' ;    // If the count down is finished, redirect to page
    }
},1000);
