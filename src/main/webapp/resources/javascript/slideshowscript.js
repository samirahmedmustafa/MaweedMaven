/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1;}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1;}    
  if (n < 1) {slideIndex = x.length;}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

/***************************** Star Rating ******************************************/

var count;
        function starmark(item)
        {
            count = item.id[0];
            sessionStorage.starRating = count;
            var subid = item.id.substring(1);
            for (var i = 0; i < 5; i++)
            {
                if (i < count)
                {
                    document.getElementById((i + 1) + subid).style.color = "orange";
                } else
                {
                    document.getElementById((i + 1) + subid).style.color = "black";
                }
            }
        }
        function result()
        {
//Rating : Count
//Review : Comment(id)
            alert("Rating : " + count + "\nReview : " + document.getElementById("comment").value);
        }