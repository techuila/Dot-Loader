let DotLoader = (()=>{
    'use strict';
    return{
        startLoader: (id)=>{
            $(`#${id}`).append('<div id="dot-spinner"></div>');
            $('#dot-spinner').load('./preloader/index.html');                
        },
        stopLoader: ()=>{
            $('#dot-spinner').remove();
        }
    }
})();