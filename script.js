$(document).ready(function() {
    var authorIsHidden = false;
    var author = document.getElementsByClassName("author");
    $('.share-icon').on('click', () =>{
        var screenWidth = window.innerWidth;
        
        console.log(window.innerWidth);
       /*  if (authorIsHidden == false && screenWidth <= 600) {
            console.log("mobil felbontás");
            $('.left').css('opacity', '0');
            $('.hide').css('opacity', '1');
            authorIsHidden = true;
            console.log(authorIsHidden); 
            $('.hide').toggle();
        }else if(authorIsHidden == true && screenWidth <= 600){
            console.log("mobil felbontás");
            $('.left').css('opacity', '1');
            $('.hide').css('opacity', '0');
            authorIsHidden = false;
            $('.hide').toggle();
        }else{
            console.log('nem mobilos felbontás');
            $('.hide').toggle();
        } */

        if (screenWidth <= 375) {
            $('.hide').toggle('.fade_in');
            $('.left').toggle('.fade_out');
            $('.right').css('width', '100%');

        }
        else{
            $('.hide').toggle('.fade_in');
        }
        
    })
})