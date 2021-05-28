document.addEventListener(
  "DOMContentLoaded",
  function (str) {
    var xhttp;

    if (str == "") {
      document.getElementById("art1").innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("art1").innerHTML = this.responseText;
      }
    };

    xhttp.open("GET", "getArticle.php?q=" + str, true);
    xhttp.send();

    var xhttp2;
    if (str == "") {
      document.getElementById("art2").innerHTML = "";
      return;
    }
    xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("art2").innerHTML = this.responseText;
      }
    };

    xhttp2.open("GET", "getArticle2.php?q=" + str, true);
    xhttp2.send();
    var xhttp3;
    if (str == "") {
      document.getElementById("art3").innerHTML = "";
      return;
    }
    xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("art3").innerHTML = this.responseText;
      }
    };
    xhttp3.open("GET", "getArticle3.php?q=" + str, true);
    xhttp3.send();
  },
  false
);

function hover(e) {
  let hero = document.getElementById("hero");

  if (e == document.getElementById("brig")) {
    hero.classList.remove("mainPage__hero");
    hero.classList.remove("mainPage__heroRad");
    hero.classList.remove("mainPage__heroDapper");
    hero.classList.add("mainPage__heroOutlaw");
    hero.href = "brigandgame.html";
    console.log("success");
  } else if (e == document.getElementById("rad")) {
    hero.classList.remove("mainPage__hero");
    hero.classList.remove("mainPage__heroOutlaw");
    hero.classList.remove("mainPage__heroDapper");
    hero.classList.add("mainPage__heroRad");
    hero.href = "robots and duels.html";
    console.log("success");
  } else if (e == document.getElementById("dapper")) {
    hero.classList.remove("mainPage__hero");
    hero.classList.remove("mainPage__heroOutlaw");
    hero.classList.remove("mainPage__heroRad");
    hero.classList.add("mainPage__heroDapper");
    hero.href = "dappergame.html";

    console.log("success");
  }
}