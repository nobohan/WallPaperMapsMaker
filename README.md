# WallPaperMapsMaker
Makes a beautiful collection of maps for wallpaper.

This is a simple Python script that allows printing several maps of a desired location and zoom level, benefiting from available online maps. Based on `OpenLayers 2` and `wkhtmltopdf`.

## How it is working?

* Download the application and run the `wallpapermapsmaker.py` script while connected to the internet. 
* For changing the location of the map, set the center of the maps in longitude and latitude (in decimal degrees) in the Python variables `lon` and `lat`, and the zoom level in `zoom`. 
* For changing the layers, you may choose different layer names in the `layers` Python variable. 
* Have a look of the map (e.g., for checking location) by opening the `ol2/map.html` file. 

## The basics

 The basics of the WallPaperMapsMaker are:

 * A html file loads the map tiles from different map providers using the javascript library `OpenLayers 2`.
 * The library `wkhtmltopdf` is used to generated pdf files from the html file.
 * All A4 pdfs are collated in one. The maps can be printed as A4 and used to set up a wallpaper.
 * Or the pdfs can be merged into A3, A2, A1, A0, etc. using pdf imposition, e.g. with `pdfjam`.
 * A version of the script in R was also developed. 
 * A version of the map using `OpenLayers 3` (ol3) was developed but there is a problem working with `wkhtmltopdf` and `OpenLayers 3`.

## Thanks
Thanks to, of course, contributors of OpenStreetMap from which most of the maps printed here are derived. The creator(s) of the website Map Compare (http://mc.bbbike.org/mc/) must be granted as well as this website allows to discover and select hundreds of map styles. 

## Some notes
 
An A4 in 300 dpi is 2480 x 3508 px
An A4 in 200 dpi is 1654 x 2339 px

→ But this results in a 1.5 page pdf with the content at the right which is overflown and not printed!

* Moving the page-size in wkhtmltopdf from A4 to A3 did change as more content could be printed on the first page. So changing the format options in wkhtmltopdf must imply that we change the width/height of the html id map object
* changing the –dpi option in wkhtmltopdf does change nothing, the pdf file size is idem and the printed area is idem.
* changing the height/width of the html id map change of course the extent of the map!
* the option “zoom” in wkhtmltopdf has no effect.
* the zoom css option did do he job of zooming!!! But id map size must be changed accordingly 

Good size for an A4 is "width:2105px ; height:1480px" at zoom = 100%


* example of use of `pdfjam`: merge 16 A4 pdf in a landscape-oriented A1 pdf: 
```
pdfjam --nup 4x4 map2.pdf map3.pdf map4.pdf map11.pdf map9.pdf map16.pdf map19.pdf map8.pdf map14.pdf map12.pdf map17.pdf map15.pdf map10.pdf map5.pdf map18.pdf map1.pdf --trim '0.3cm 0.3cm 0.3cm 0.3cm' --clip true --landscape --a1paper --outfile mapA1.pdf
```

## TODOs

 * Make a web interface for choosing:
   * extent & zoom level
   * layers to be printed
 * Host the application
 * Use OpenLayers 3 instead of Openlayers 2
   * Issue! OL3 not working with  wkhtmltopdf. see http://stackoverflow.com/questions/28064345/wkhtmltopdf-openlayers-v3-failed and https://github.com/openlayers/ol3/issues/5214
 * Add content to the map, like layer name or something customized
 

