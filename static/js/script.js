$(document).ready(function() {
 

 	 
    if (screen.width < 993) {
        $(".genderSuicide-per-year").hide();
        $(".suicide-per-year").hide();
        $(".generationSuicide-per-year").hide();
    } else {

        $(".genderSuicide-per-year").show();
        $(".suicide-per-year").show();
        $(".generationSuicide-per-year").show();
    }


});
