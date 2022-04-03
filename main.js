function changeWindow(page) {
    window.location.href = page
}

function geoFindMe() {


    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        var mapOptions = {
            center: [latitude, longitude],
            zoom: 17,
            pin: true
        }
    
        var map = new L.map('map', mapOptions);
    
        var layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    
        map.addLayer(layer);
    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if(!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

}

function vibrate() {
    navigator.vibrate([50,1,50,1,50])
    navigator.vibrate(0)
    navigator.vibrate([100,1,100,1,100])
    navigator.vibrate(0)
    navigator.vibrate([300,1,300,1,300])
    navigator.vibrate(0)
}