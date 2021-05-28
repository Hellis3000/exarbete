document
  .querySelector("input[type=button]")
  .addEventListener("click", function () {
    rollTheDice();
  });

var rollTheDice = function () {
  var turn = true,
    i,
    total = [],
    faceValue,
    output = "",
    diceCount = document.querySelector("input[type=number]").value || 1;
  count = 0;

  for (i = 0; i < diceCount; i++) {
    faceValue = Math.floor(Math.random() * 6);
    output += "&#x268" + faceValue + "; ";
    total.push(faceValue + 1);

    for (j = 0; j < total.length; j++) {
        if (total[i] === 6) count++;
        console
      }
  }

 

  //combat values
  totalvalue = total.reduce(function (a, b) {
    return a + b;
  }, 0);
  document.getElementById("dice").innerHTML = output;
  console.log(totalvalue);
  displayHP = document.getElementById("HP");
  totalHP = parseInt(displayHP.textContent);

  switch(true) {
    case(totalHP > 15):
      
      if (totalvalue >= 3) {
        totaldamage = Math.floor(totalvalue - 5);
        totalHP = Math.floor(totalHP - totaldamage);

        if(totalHP > 15){document.getElementById("breadText").innerHTML =
      "You hit the target for "+totalvalue+". Note that he has a armor value of 5. So you do a total of " +
      totaldamage +
      " Damage. He now has a total of " +
      totalHP +
      " hit points left";

    displayHP.textContent = totalHP;
    totalHP = parseInt(displayHP.textContent);}

        else{document.getElementById("breadText").innerHTML =
        "You hit the target for "+totalvalue+".. Note that he has a armor value of 5. So you do a total of " +
        totaldamage +
        " Damage. He now has a total of " +
        totalHP +
        " hit points left. He is starting to look a bit beat up. Its time to finish this.";


      image = document.getElementById("fightImage");
      image.src = "assets/cool2.png";
      
      displayHP.textContent = totalHP;
      totalHP = parseInt(displayHP.textContent);

      console.log(totalHP)}
      

      }
      if (totalvalue < 3) {
        document.getElementById("breadText").innerHTML =
          "you fail to penetrate the armor of your target or miss entirely.";
      }

      break;

    case(totalHP >= 1 && totalHP < 16) :
      
      if (totalvalue >= 3) {
        totaldamage = Math.floor(totalvalue - 5);
        totalHP = Math.floor(totalHP - totaldamage);
        if (totalHP > 1){
        document.getElementById("breadText").innerHTML =
        "You hit the target for "+totalvalue+".. Note that he has a armor value of 5. So you do a total of " +
        totaldamage +
        " Damage. He now has a total of " +
        totalHP +
        " hit points left. He is starting to look a bit beat up. Its time to finish this.";


      image = document.getElementById("fightImage");
      image.src = "assets/cool2.png";
      
      displayHP.textContent = totalHP;
      totalHP = parseInt(displayHP.textContent);

      console.log(totalHP)}

      else{

        
      displayHP.textContent = "The enemy has been defeated!";
        document.getElementById("breadText").innerHTML =
        "The fight iso over. Your enemy has been defeated. Note, that is a very basic example. But it shows you the core. YOu roll a couple of dice, and it gives you a outcome. ";

      }

      
      }
      if (totalvalue < 3) {
        document.getElementById("breadText").innerHTML =
          "you fail to penetrate the armor of your target or miss entirely.";
      }

   
      break;

    case (totalHP < 1):
      
      displayHP.textContent = "The enemy has been defeated!";
      document.getElementById("breadText").innerHTML =
        "The fight iso over. Your enemy has been defeated. Note, that is a very basic example. But it shows you the core. YOu roll a couple of dice, and it gives you a outcome. ";
      break;
  }
};
