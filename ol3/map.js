// OpenLayers 3 - WallPaperMapsMaker - Julien Minet - August 2016. 

// Sources of the layers
    
var layers={}
layers["osm"] = "";
layers["opencyclemap"] = "http://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png"
layers["outdoor"] = "http://{a-c}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png"
// ...

    
function init() {

    // 1) Map creation
    var olmap = new ol.Map({
      target: document.getElementById('map'),  // instead of "target: 'map' " because of the cursor pointer
      view: new ol.View({
        center: ol.proj.transform([5.8111,49.6860], 'EPSG:4326', 'EPSG:3857'),
        zoom: 14
      })
    });

    // 2) Add layers
    // Add layer function
    var showLayer = function(layername){
    	var url = layers[layername]
   	var layer = new ol.layer.Tile({
   	source: new ol.source.OSM({
	      url: url 
	      })
   	})
	   olmap.addLayer(layer);
    };    
    
    // OpenStreetMap layer
    /*var osmLayer = new ol.layer.Tile({
      source: new ol.source.OSM()
    });*/
    //olmap.addLayer(osmLayer);

    showLayer(layername);
    
    // TO DO: hide ol controls 
}