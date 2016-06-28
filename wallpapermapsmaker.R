# WallPaperMapsMaker
# Julien Minet, julien_wa@yahoo.fr, nobohan.be, June 2016 

# Set working directory
setwd("")

# Set list of layers
layers = c('osm', 
           'opencyclemap', 'transport', 'landscape', 'outdoor', 'transport_dark', 'spinal_map',
           'stamen', 'stamen_watercolor', 
           'opentopomap',
           'wanderreitkarte',
           'ESRI', 'ESRIsatellite', 'ESRItopo', 
           'gsat', 'gbase', 'ghybrid', 'gnormal', 
           'map1eu')

map_list = list()

for(ii in 1:length(layers)){
  print(layers[ii])
  
  # 1) Write the input.js file
  s = paste(c('layer = "',layers[ii],'";'), collapse="")
  write(s,file='./viewer/www/input.js')
  
  # 2) Make a printpage using wkhtmltopdf
  system(paste(c("cd ",getwd(),
                 " && wkhtmltopdf ",
                 "--orientation  Landscape ",
                 "--javascript-delay  8000 ",
                 "--margin-left  0 ",
                 "--margin-right  0 ",
                 "--margin-bottom  0 ",
                 "--margin-top  0 ",
                 "--page-size  A4 ",
                 "./viewer/www/map.html maps/map", ii,".pdf")
               , collapse = ""))
     
  map_list[ii] <- paste(c("maps/map",ii,".pdf "),collapse="")
      
}

# 3) Collate all pdf together
system(paste(c("pdftk ",map_list," output maps_collection.pdf"), collapse = ""))

