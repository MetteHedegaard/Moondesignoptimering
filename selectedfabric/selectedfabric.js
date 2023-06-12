 /* Burgermenu Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
 function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  /*Vi har en toggle function som har fire variabler, som der skiftes imellem ved onclick funktionen*/
    /*block vises billedet og none vises billedet ikke*/
  function toggleImage() {
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var fab1 = document.getElementById('fab1');
    var fab2 = document.getElementById('fab2');

    if (img1.style.display && fab1.style.display === 'none') {
        img1.style.display = 'block';
        img2.style.display = 'none';
        fab1.style.display = 'block';
        fab2.style.display = 'none';
    } else {
        img1.style.display = 'none';
        img2.style.display = 'block';
        fab1.style.display = 'none';
        fab2.style.display = 'block';

    }
}

