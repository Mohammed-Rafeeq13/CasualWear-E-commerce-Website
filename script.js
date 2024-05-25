//single product html script file
let mainImg = document.getElementById("mainImg");
        let smalImg = document.getElementsByClassName("small-img");

        smalImg[0].onclick = function(){
            mainImg.src =smalImg[0].src;
        }
        smalImg[1].onclick = function(){
            mainImg.src =smalImg[1].src;
        }
        smalImg[2].onclick = function(){
            mainImg.src =smalImg[2].src;
        }
        smalImg[3].onclick = function(){
            mainImg.src =smalImg[3].src;
        }
