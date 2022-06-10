jQuery(document).ready(lista);


function lista(){

    jQuery(".hamb").click(function(e){

        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-times");
        });

        jQuery("header .container nav a").click(function(e){
        jQuery(".hamb i").removeClass("fa-times");
        jQuery("header .container nav").removeClass("open");
        
            var dev = jQuery(this).attr("href");
            jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top -76

        });

    });


}
