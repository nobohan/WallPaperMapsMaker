// Openlayers - WPMM - Julien Minet - julien_wa@yahoo.fr - Avril-Sept 2016
 

// Sources of the layers
var layers={}
layers["osm"] = "osm";
layers["df_opencyclemap"] = "http://a.tile.thunderforest.com/cycle/${z}/${x}/${y}.png";
layers["df_transport_dark"] = "http://a.tile.thunderforest.com/transport-dark/${z}/${x}/${y}.png";
layers["df_transport"] = "http://a.tile.thunderforest.com/transport/${z}/${x}/${y}.png";
layers["df_outdoor"] = "http://a.tile.thunderforest.com/outdoors/${z}/${x}/${y}.png";
layers["df_spinal_map"] = "http://a.tile.thunderforest.com/spinal-map/${z}/${x}/${y}.png";
layers["df_landscape"] = "http://a.tile.thunderforest.com/landscape/${z}/${x}/${y}.png";
layers["df_geofabrik_topo"] = "https://a.tile.geofabrik.de/15173cf79060ee4a66573954f6017ab0/${z}/${x}/${y}.png";
layers["df_komoot"] = "https://a.tile.hosted.thunderforest.com/komoot-2/${z}/${x}/${y}.png";
layers["st_toner"] = "toner";
layers["st_watercolor"] = "watercolor";
layers["co_wanderreitkarte"] = "http://topo2.wanderreitkarte.de/topo/${z}/${x}/${y}.png";
layers["co_opentopomap"] = "http://a.tile.opentopomap.org/${z}/${x}/${y}.png";
layers["co_map1eu"] = "http://alpha.map1.eu/tiles/${z}/${x}/${y}.jpg";
layers["co_hyddafull"] = "http://a.tile.openstreetmap.se/hydda/full/${z}/${x}/${y}.png";
layers["co_falk"] = "http://ec2.cdn.ecmaps.de/WmsGateway.ashx.jpg?TileX=${x}&TileY=${y}&ZoomLevel=${z}&Experience=falk&MapStyle=Falk%20OSM";
layers["co_kompass_summer"] = "http://ec2.cdn.ecmaps.de/WmsGateway.ashx.jpg?TileX=${x}&TileY=${y}&ZoomLevel=${z}&Experience=kompass&MapStyle=su";
layers["df_ESRI"] = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/${z}/${y}/${x}.jpg";
layers["df_ESRI_satellite"] = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}.jpg";
layers["df_ESRI_topo"] = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/${z}/${y}/${x}.jpg";

// General parameters
var map, center;
var proj = new OpenLayers.Projection("EPSG:3857");
var wgs84proj = new OpenLayers.Projection("EPSG:4326");
var apiKey = "Ap9b3XwNvvwAFJhH4FrvBKmisp-lwA6eFcFQ-nFIEYI5Y_BSt6vMZkSBM6Hz_o_V";  // for Bing maps


// Map options
var options = {
	controls: [],
	projection: proj,
	units: "m"
};

// Zoom level & extent
var zoom = 14;
var centerPigeon = new OpenLayers.LonLat(5.54036,49.73822);
var centerArlon = new OpenLayers.LonLat(5.8111,49.6860);
center = centerArlon;

// Map creation
function init(layername, zoom, center) {
    map = new OpenLayers.Map('map', options);
 	   
    // Add layer function
    var showLayer = function(layername){
    	var url = layers[layername];
    	var typeoflayer = layername.substring(0,3);
    	switch (typeoflayer){
    		case "df_":  // Case of most layers (default)
    	      var layer = new OpenLayers.Layer.OSM(layername,[url]);
    	      break;
    	      
    	   case "co_":  // Case layers that need crossOriginKeyword set to null
    	      var layer = new OpenLayers.Layer.OSM(layername, [url], {tileOptions: {crossOriginKeyword: null}});
    	      break;
    	      
    	   case "osm":  // Case of default OSM layer
    	      var layer = new OpenLayers.Layer.OSM(layername);
    	      break;

    	   case "st_":  // Case of Stamen layers
    	      var layer = new OpenLayers.Layer.Stamen(url);
    	      break;

    	};
    	map.addLayer(layer);
    }
    
    showLayer(layername);
    
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
    //var hikebikemap = new OpenLayers.Layer.OSM("HikeBikeMap", ['http://toolserver.org/tiles/hikebike/${z}/${x}/${y}.png']); //deprecated
    //var stamen_terrain = new OpenLayers.Layer.Stamen("terrain"); //deprecated
 
    // Ajout des controles
    map.addControl(new OpenLayers.Control.Navigation());

    center.transform(wgs84proj, proj)
    map.setCenter(center,zoom)

}   
