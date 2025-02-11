let placesService;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 19.0760, lng: 72.8777 }, // Default to Mumbai
        zoom: 10,
    });

    placesService = new google.maps.places.PlacesService(map);
}


function searchHospitals() {
    if (!placesService) {
        console.error("PlacesService not initialized yet!");
        return;
    }

    const request = {
        location: map.getCenter(),
        radius: 5000, // 5 km
        type: ["hospital"],
    };

    placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log("Hospitals found:", results);
        } else {
            console.error("Nearby Search failed:", status);
        }
    });
}

