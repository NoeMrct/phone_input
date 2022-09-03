var way = 1;

function add() {
  number = document.getElementById("number_1").innerHTML;
  if (parseFloat(number) < 9999999999) {
    number = parseFloat(++number);
    document.getElementById("number_1").innerHTML = String(number).padStart(
      10,
      "0"
    );
  }
}

function sub() {
  number = document.getElementById("number_1").innerHTML;
  if (parseFloat(number) > 0) {
    number = parseFloat(--number);
    document.getElementById("number_1").innerHTML = String(number).padStart(
      10,
      "0"
    );
  }
}

function reset() {
  document.getElementById("number_1").innerHTML = "0000000000";
  document.getElementById("number_2").innerHTML = "0000000000";
  document.getElementById("number_3").innerHTML = "0000000000";
}

function updateNumber(slider) {
  slider.setAttribute("value", slider.value);
  val = slider.value;
  val = String(val).padStart(10, "0");
  document.getElementById("number_2").innerHTML = val;
}

function no() {
  var phoneNumber = "0";
  for (var i = 0; i < 9; i++) {
    phoneNumber = phoneNumber + String(Math.floor(Math.random() * 10));
  }
  document.getElementById("number_3").innerHTML = phoneNumber;
}

function yes() {
  var validation = document.querySelector(".validation");
  validation.style.display = "block";
  setTimeout(function () {
    validation.style.opacity = 1;
    setTimeout(function () {
      validation.style.opacity = 0;
      setTimeout(function () {
        validation.style.display = "none";
      }, 1000);
    }, 2000);
  }, 300);
}

function otherWay() {
  document.getElementById("way_1").style.display = "none";
  document.getElementById("way_2").style.display = "none";
  document.getElementById("way_3").style.display = "none";
  ++way;
  if (way === 1) {
    document.getElementById("way_1").style.display = "flex";
  } else if (way === 2) {
    document.getElementById("way_2").style.display = "flex";
  } else if (way === 3) {
    document.getElementById("way_3").style.display = "flex";
    no();
  } else {
    way = 0;
    otherWay();
  }
}
