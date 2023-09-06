function slope(){
    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://derpmandev.github.io/unblocked-games/slope');
    });
}
function yt () 
    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://www.youtube.com/');
    });

    function google () 
    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://google.com/');
    });
   
