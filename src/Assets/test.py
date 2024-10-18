import os
from pathlib import Path
photoStr = 'const photos = ['
importStr = ''
strPrefix = 'import '
strSuffix = ' from \'../Assets/GalleryImages/'


directory = Path.home() / 'Documents' / 'Personal' / 'Projects' / 'stay-at-willow' / 'src' / 'Assets' / 'GalleryImages'
for file_index, filename in enumerate(os.listdir(directory)): 
  if filename.endswith(".JPG") or filename.endswith(".png"): 
    from PIL import Image
    # get image
    filepath = Path.home() / 'Documents' / 'Personal' / 'Projects' / 'stay-at-willow' / 'src' / 'Assets' / 'GalleryImages' / filename
    img = Image.open(filepath)

    # get width and height
    width = str(img.width)
    height = str(img.height)
    photoStr += '{src: ' + filename[:-4] + ', width: ' + width + ', height: ' + height + '},\n' 

    importStr += strPrefix + filename[:-4] + strSuffix + filename + '\'\n'
    
    # const photos = [
    # { src: kitchen2, width: 800, height: 500},

photoStr += ']'

print(photoStr)
print('')
print(importStr)