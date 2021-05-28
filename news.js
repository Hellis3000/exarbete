document.addEventListener('DOMContentLoaded', function(str) {
    var xhttp;
    if (str == "") {
      document.getElementById("art1").innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      document.getElementById("art1").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "getArticleDev.php?q="+str, true);
    xhttp.send();
  }, false);
  
  