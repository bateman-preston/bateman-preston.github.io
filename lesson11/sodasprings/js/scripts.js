update();
function toggleMenu() {
    document.querySelector(".activenav").classList.toggle("responding")
}

function update(){
    let today = new Date();
    var day;
    var month;
    switch (today.getDay()) {
        case 0:
          day = "Sunday, ";
          break;
        case 1:
          day = "Monday, ";
          break;
        case 2:
          day = "Tuesday, "
          break;
        case 3:
          day = "Wednesday, ";
          break;
        case 4:
          day = "Thursday, "
          break;
        case 5:
          day = "Friday, "
          break;
        case 6:
          day = "Saturday, "
          break;
      }
      switch (today.getMonth()) {
        case 0:
          month = " January ";
          break;
        case 1:
          month = " Feburary ";
          break;
        case 2:
          month = " March "
          break;
        case 3:
          month = " April ";
          break;
        case 4:
          month = " May "
          break;
        case 5:
          month = " June "
          break;
        case 6:
          month = " July "
          break;
        case 7:
          month = " August "
          break;
        case 8:
          month = " September ";
          break;
        case 9:
          month = " October "
          break;
        case 10:
          month = " Novemeber "
          break;
        case 11:
          month = " December "
          break;
      }
    document.getElementById("today").innerHTML = "Last Updated: " + day + today.getDate() + month + today.getFullYear();
}

