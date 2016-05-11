# test for a complete script
# Julien Minet, julien_wa@yahoo.fr, nobohan.be, April 2016

# Import python modules
import os
import subprocess
import Image
import time

# Set list of layers
layers = ('osm', 'opencyclemap', 'outdoor', 'hikebikemap', 'stamen', 'stamen_watercolor', 'stamen_terrain','gsat', 'gbase', 'ghybrid', 'gnormal')


# START of the loop, for each layers:
for ii in range(1,len(layers)):
    print(ii)
    
    # 1) Write the input.js file
    f = open('./viewer/www/input.js','w') # in write mode, the content of the file is deleted once it is open
    s = 'layer = "' + layers[ii-1]  + '";'
    f.write(s)
    f.close()

    # 2) Make a printpage using wkhtmltopdf
    subprocess.call(['wkhtmltopdf','--dpi','300',
                     '--orientation','Landscape',
                     '--javascript-delay','8000',
                     '--page-size', 'A3',
                     './viewer/www/map.html',
                     'maps/map'+ str(ii) +'.pdf'])
    

