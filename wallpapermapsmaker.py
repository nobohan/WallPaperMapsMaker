# test for a complete script
# Julien Minet, julien_wa@yahoo.fr, nobohan.be, April 2016

# Import python modules
import os
import subprocess
import Image
import time

# Set list of layers
layers = ('osm', 'opencyclemap', 'outdoor', 'hikebikemap', 'stamen', 'stamen_watercolor', 'stamen_terrain','gsat', 'gbase', 'ghybrid', 'gnormal')


# START of the main loop, for each point of the shapefile...
for ii in range(1,2):
    print(ii)
    
    # Write the input.js file
    f = open('./viewer/www/input.js','w') # in write mode, the content of the file is deleted once it is open
    s = 'layer = "' + layers[ii-1]  + '";'
    f.write(s)
    f.close()

    # Open Firefox and make a printpage
    subprocess.call(['wkhtmltopdf','--dpi','700','--orientation','Landscape','--javascript-delay','8000', './viewer/www/map.html','map.pdf'])
    #subprocess.call(['wkhtmltopdf', './viewer/www/map.html','map.pdf'])
    
    # Delete the old img file
    os.rename('map.pdf', 'map'+ str(ii) +'.pdf')
    
    # END of the main loop

