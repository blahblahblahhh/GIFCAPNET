console.log('hi');

(function titleScroller(text) {
document.title = text;
setTimeout(function () {
    titleScroller(text.substr(1) + text.substr(0, 1));
}, 500);
}(" GIFCap.Net ** WELCOME ** GIFCap.Net ** WELCOME **"));

function spinLogoIn(){
setTimeout(function(){
  $('.header p').css({'margin':'50px 0'})
  $('.logo').show("scale",{}, 1000)
}, 350);
};

$(document).ready(function(){
  console.log('ready')
spinLogoIn()
})
