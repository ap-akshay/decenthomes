"use strict";
//ready function of jquery 
$(document).ready(function(){
            //event handler for anchor tag whose parent is jdom  
            $("#faqs a").click(function()
            {
                //checks if the current anchor tag's previous attribute has class hide or not     
                if($(this).prev().attr("class") =="hide")
                {
                    $(this).text("Show Less"); //if true sets the text to Show less
                }
                else
                {
                    $(this).text("Show More"); //if false sets the text to Show more
                }
                $(this).prev().toggleClass();  //toggleClass of jquery
            }
            );


            $("#faqs li").click(function()
            {
                //checks if the current anchor tag's previous attribute has class hide or not     
                if($(this).prev().attr("class") =="hide")
                {
                    $(this).text("Show Less"); //if true sets the text to Show less
                }
                else
                {
                    $(this).text("Show More"); //if false sets the text to Show more
                }
                $(this).prev().toggleClass();  //toggleClass of jquery
            }
            );

    }
);   
