// Initialize the map
var map = new maptalks.Map('map', {
    center: [0, 0],  // Center the map at latitude 0, longitude 0
    zoom: 10        // Set the initial zoom level
  });
  

  var tileLayer = new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    subdomains: ['a', 'b', 'c']
  }).addTo(map);


 

  // Add zoom control
new maptalks.control.Zoom({
    'position': 'top-right'
  }).addTo(map);
  
  // Add scale control
  new maptalks.control.Scale({
    'position': {
      'bottom': '20px',
      'left': '20px'
    },
    'metric': true,
    'imperial': false
  }).addTo(map);
  
  // Add navigation control
  new maptalks.control.Navigation({
    'position': 'top-right'
  }).addTo(map);
  