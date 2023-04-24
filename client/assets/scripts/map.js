var c = function (pos) {
  var latitude = pos.coords.latitude;
  var longitude = pos.coords.longitude;
  var coords = latitude + "," + longitude;

  document
    .getElementById("google_map")
    .setAttribute(
      "src",
      "https://maps.google.co.uk?q=" + coords + "&z=60&output=embed"
    );
};

document.getElementById("get_location").onclick = function () {
  navigator.geolocation.getCurrentPosition(c);
  return false;
};
