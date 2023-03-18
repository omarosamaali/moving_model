let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat = document.getElementById('boat');
let omar = document.querySelector('.omar');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value + 'px';
    omar.style.fontSize = value + 'px';
    if(scrollY >= 67){
        omar.style.fontSize = 67 + 'px'; 
        omar.style.position = 'fixed'; 
        if(scrollY >= 478){
            omar.style.display = 'none';
        }else{
            omar.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f);'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f);'  
        }
    }
}