# WallPaperMapsMaker
Makes a beautiful collection of maps as a wallpaper 

This work is a simple Python script that allows printing several maps of a desired location, benefiting from the dozens of online maps that are available.

Work in progress!!!

## How it is working?

Simply download the application and run the wallpapermapsmaker.py script while connected to the internet. 



## TAF

 * Increase number of layers

## Future TAF

 * Make a web interface for choosing:
   * extent & zoom level
   * layers to be printed
 * Host the application
 * Use OpenLayers 3 instead of Openlayers 2
 * Add something to the map, like layer name or something customized
 
## Some notes
 
An A4 in 300 dpi is 2480 x 3508 px
An A4 in 200 dpi is 1654 x 2339 px

→ But this results in a 1.5 page pdf with the content at the right which is overflown and not printed!

* Moving the page-size in wkhtmltopdf from A4 to A3 did change as more content could be printed on the first page. SO changing the format options in wkhtmltopdf must imply that we change the width/height of the html id map object
* changing the –dpi option in wkhtmltopdf does change nothing, the pdf file size is idem and the printed area is idem.
* changing the height/width of the html id map change of course the extent of the map!
* the option “zoom” in wkhtmltopdf has no effect.
* the zoom css option did do he job of zooming!!! But id map size must be changed accordingly 

Good size for an A4 is "width:2105px ; height:1480px" at zoom = 100%
