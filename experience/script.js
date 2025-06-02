$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 


// Start of Tawk.to Live Chat with Custom Configuration
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

// Custom configuration for left positioning
Tawk_API.customStyle = {
    visibility: {
        desktop: {
            position: 'bl', // bottom-left
            xOffset: 20,
            yOffset: 20
        },
        mobile: {
            position: 'bl', // bottom-left
            xOffset: 10,
            yOffset: 20
        }
    }
};

// Load Tawk.to script
(function(){
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/683874bc58576e1911972e48/1ise8g0bf';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

// Additional customization after widget loads
Tawk_API.onLoad = function(){
    // Apply custom styling after load
    setTimeout(function() {
        // Inject additional styles
        var customStyles = document.createElement('style');
        customStyles.innerHTML = `
            .tawk-button {
                background-color: #FFD700 !important;
                box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4) !important;
            }
            .tawk-chat-bubble {
                background: linear-gradient(135deg, #FFD700, #FFA500) !important;
            }
        `;
        document.head.appendChild(customStyles);
        
        // Force left positioning
        var tawkElements = document.querySelectorAll('[id*="tawk"]');
        tawkElements.forEach(function(element) {
            element.style.left = '20px';
            element.style.right = 'auto';
        });
    }, 1000);
};

// Handle window resize to maintain left position
Tawk_API.onChatMaximized = function(){
    setTimeout(function() {
        var tawkFrame = document.querySelector('#tawk-chat-widget-frame');
        if (tawkFrame) {
            tawkFrame.style.left = '20px';
            tawkFrame.style.right = 'auto';
        }
    }, 100);
};

// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Experience | Portfolio Bayya Maniteja";
        $("#favicon").attr("href","/assets/images/favicon.png");
    }
    else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href","/assets/images/favhand.png");
    }
});