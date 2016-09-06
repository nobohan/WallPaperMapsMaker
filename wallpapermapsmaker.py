# WallPaperMapsMaker
# Julien Minet, julien_wa@yahoo.fr, nobohan.be, April 2016

# Import python modules
import os
import subprocess
from pyPdf import PdfFileWriter, PdfFileReader

# Set list of layers
#layers = ('osm',
 #         'opencyclemap', 'transport', 'landscape', 'outdoor', 'transport_dark', 'spinal_map',
  #        'stamen', 'stamen_watercolor',
   #       'opentopomap',
    #      'wanderreitkarte',
     #     'ESRI', 'ESRIsatellite', 'ESRItopo',
      #    'gsat', 'gbase', 'ghybrid', 'gnormal',
       #   'map1eu')
layers = ('osm', 'opencyclemap')
          

# For collating the pdfs
# Creating a routine that appends files to the output file
def append_pdf(input,output):
    [output.addPage(input.getPage(page_num)) for page_num in range(input.numPages)]

# Creating an object where pdf pages are appended to
output = PdfFileWriter()

# START of the loop, for each layers:
for ii in range(1,len(layers)):
    print(ii)
    
    # 1) Write the input.js file
    f = open('./ol3/input.js','w') # in write mode, the content of the file is deleted once it is open
    s = 'layer = "' + layers[ii-1]  + '";'
    f.write(s)
    f.close()

    # 2) Make a printpage using wkhtmltopdf
    subprocess.call(['wkhtmltopdf',
                     '--orientation','Landscape',
                     '--javascript-delay','8000',
                     '--margin-left', '0',
                     '--margin-right', '0',
                     '--margin-bottom', '0',
                     '--margin-top', '0',
                     '--page-size', 'A4',
                     '--zoom', '10',
                     './ol3/map.html',
                     'maps/map'+ str(ii) +'.pdf'])
    
    # 3) Collate all pdf together
    append_pdf(PdfFileReader(open('maps/map'+ str(ii) +'.pdf','rb')),output)

output.write(open("maps/maps_collection.pdf","wb"))
