// 
function checkSpeed() {
  const speed = document.getElementById("speed").value;

  if (speed < 70) {
    document.getElementById("momentum").innerHTML = "Ok";
  } else {
    const points = Math.floor((speed - 70) / 5);
    if (points >= 12) {
      document.getElementById("momentum").innerHTML = "Licence suspended";
    } else {
      document.getElementById("momentum").innerHTML = `Points: ${points}`;
    }
  }
}
