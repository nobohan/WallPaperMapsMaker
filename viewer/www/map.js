// Openlayers - WPMM - Julien Minet - julien_wa@yahoo.fr - Avril 2016
 
// Parametres generaux et definitions des variables
var map, gnormal, ghyb, gbase, osm, geojson, center;
var proj = new OpenLayers.Projection("EPSG:3857");
var dispproj = new OpenLayers.Projection("EPSG:4326");
var bounds = new OpenLayers.Bounds(4.7, 49.5, 6.2, 50.5);
bounds.transform(dispproj,proj);
var apiKey = "Ap9b3XwNvvwAFJhH4FrvBKmisp-lwA6eFcFQ-nFIEYI5Y_BSt6vMZkSBM6Hz_o_V";

// Options de la carte
var options = {
	controls: [],
	projection: proj,
	displayProjection: proj,
	units: "m",
	numZoomLevels: 10,
	maxResolution: 1500,
	maxExtent: bounds
	};

// Creation de la carte - debut de la fonction init
function init(layer) {
    map = new OpenLayers.Map('map', options);
 	   
    
    // Ajout des couches de base
    // OSM Layers
    // Mapnik
    var osm = new OpenLayers.Layer.OSM("OpenStreetMap");
    // Thunderforest layers
    var opencyclemap = new OpenLayers.Layer.OSM("TF OpenCycleMap", ['http://a.tile.thunderforest.com/cycle/${z}/${x}/${y}.png','http://b.tile.thunderforest.com/cycle/${z}/${x}/${y}.png','http://c.tile.thunderforest.com/cycle/${z}/${x}/${y}.png']);
    var transport = new OpenLayers.Layer.OSM("TF Transport", ['http://a.tile.thunderforest.com/transport/${z}/${x}/${y}.png','http://b.tile.thunderforest.com/transport/${z}/${x}/${y}.png','http://c.tile.thunderforest.com/transport/${z}/${x}/${y}.png']);
    var landscape = new OpenLayers.Layer.OSM("TF Landscape", ['http://a.tile.thunderforest.com/landscape/${z}/${x}/${y}.png','http://b.tile.thunderforest.com/landscape/${z}/${x}/${y}.png','http://c.tile.thunderforest.com/landscape/${z}/${x}/${y}.png']);
    var outdoor = new OpenLayers.Layer.OSM("TF Outdoor", ['http://a.tile.thunderforest.com/outdoors/${z}/${x}/${y}.png','http://b.tile.thunderforest.com/outdoors/${z}/${x}/${y}.png','http://c.tile.thunderforest.com/outdoors/${z}/${x}/${y}.png']);
    var transport_dark = new OpenLayers.Layer.OSM("TF Transport-dark", ['http://a.tile.thunderforest.com/transport-dark/${z}/${x}/${y}.png','http://b.tile.thunderforest.com/transport-dark/${z}/${x}/${y}.png','http://c.tile.thunderforest.com/transport-dark/${z}/${x}/${y}.png']);
    var spinal_map = new OpenLayers.Layer.OSM("TF Spinal-map (Metal)", ['http://a.tile.thunderforest.com/spinal-map/${z}/${x}/${y}.png','http://b.tile.thunderforest.com/spinal-map/${z}/${x}/${y}.png','http://c.tile.thunderforest.com/spinal-map/${z}/${x}/${y}.png']);
 
    // Stamen
    var stamen = new OpenLayers.Layer.Stamen("toner");
    var stamen_watercolor = new OpenLayers.Layer.Stamen("watercolor");
 

    // Google Layers
    var gsat = new OpenLayers.Layer.Google("Google Satellite",{type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 22, isBaseLayer:true});
    var gnormal = new OpenLayers.Layer.Google( "Google" , {type: google.maps.MapTypeId.NORMAL, numZoomLevels: 22, isBaseLayer:true});
    var gbase = new OpenLayers.Layer.Google( "Google Terrain", {type: google.maps.MapTypeId.PHYSICAL, numZoomLevels: 22, isBaseLayer:true} );
    var ghybrid = new OpenLayers.Layer.Google( "Google Hybrid", {type: google.maps.MapTypeId.HYBRID, numZoomLevels: 22, isBaseLayer:true} );

    // Bing maps
    var broad = new OpenLayers.Layer.Bing({name: "Bing Road", key: apiKey, type: "Road"});
    var bhybrid = new OpenLayers.Layer.Bing({name: "Bing Hybrid", key: apiKey, type: "AerialWithLabels"});
    var baerial = new OpenLayers.Layer.Bing({name: "Bing Aerial", key: apiKey, type: "Aerial"});

    // deprecated layers in May 2016
    //var hikebikemap = new OpenLayers.Layer.OSM("HikeBikeMap", ['http://toolserver.org/tiles/hikebike/{z}/{x}/{y}.png']); //deprecated
    //var stamen_terrain = new OpenLayers.Layer.Stamen("terrain"); //deprecated
 

    layername = eval(layer)
    map.addLayer(layername)
    //map.addLayers([osm, opencyclemap, outdoor, landscape, opentopomap, stamen, stamen_watercolor, gsat, gbase, ghybrid, gnormal, broad, bhybrid, baerial]);
    //map.addLayer(opentopomap) 

    // Ajout des controles
    map.addControl(new OpenLayers.Control.Navigation());
    //map.addControl(new OpenLayers.Control.Zoom());
    //map.addControl(new OpenLayers.Control.LayerSwitcher());

    //var bounds = new OpenLayers.Bounds(5.4, 49.4, 5.55, 49.8); bounds.transform(dispproj,proj);
    //map.zoomToExtent(bounds)

    zoom = 15
    centerPigeon = new OpenLayers.LonLat(5.54036,49.73822);
    centerArlon = new OpenLayers.LonLat(5.8111,49.6860);
    center = centerArlon;
    center.transform(dispproj, proj)
    map.setCenter(center,zoom)

}     // fin de la fonction init 
	

