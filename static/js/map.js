var marker = []
var map=new MapmyIndia.Map("map",{ center:[28.61, 77.23],zoomControl: true,hybrid:true });
L.marker([28.61, 77.23]).addTo(map);
function addMarker(position, title, draggable) 
  { 
  var mk = new L.Marker(position, {draggable: true, title: title}); 
  var create_content = function (tittle, content) 
    { 
    var h = new Array();
    h.push("<div>");
    h.push("<div class=\"header\">");
    h.push("<span>"); 
    h.push(tittle);
    h.push("</span> ");
    h.push("</div>");
    h.push("<div class=\"info_css\">");
    h.push(content); 
    h.push("</div>");
    h.push("</div>"); 
    return h.join(""); 
    };
    var content = create_content("An Info Window", "An example of a richer info window."); 
    mk.bindPopup(content);

  map.addLayer(mk); 
  mk.on("click", function (e) 
  { 
    mk.openPopup();
  }); 
  return mk; }

  map.on("dblclick", function (e) 
    { var title = "Text marker sample!"; 
    marker.push(addMarker(e.latlng, title)); 
    });
  