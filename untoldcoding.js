var i = 0;
var txt1 = 
"Hi My Love❤️.....!  <<               Now I want to say something special to you my wifey😍. <<<                So , Please read everything carefully jaan...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           and now i am deeply and truly in love with you and will always love you meri jaan💗...!                                                     > Everything about you is always intresting for me...!                     << one thing i wanna tell that I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >>I Love U <SweetHeart💓.....!                  ><<<< Give me One chance to Prove my Baby...!        >>>>Will You Be Mine Forever Meri Bhootni👻❤️♾️ ....!     >>>> 😍😍 Happy Propose Day My permanent one💍  From your Bandar......!"; 
var speed = 22;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {
        if (txt1.charAt(i) == "<")
            document.getElementById("text1").innerHTML += "</br>";
        else if (txt1.charAt(i) == ">")
            document.getElementById("text1").innerHTML = "";
        else if (txt1.charAt(i) == "|") {
            $(".bg_heart").css("background-image", "')");
        } else document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
