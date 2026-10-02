import os
from PIL import Image

imgs = [
  'media_1790937294068.jpg',
  'media_1790937422976.jpg',
  'media_1790937776430.jpg',
  'media_1790938032272.jpg'
]

base_dir = 'C:/Users/Ashish Sharma/.gemini/antigravity-ide/brain/9bfbee67-e706-4bba-9d31-0e49baa67dce/.user_uploaded'

for i, fn in enumerate(imgs, 1):
    path = os.path.join(base_dir, fn)
    im = Image.open(path)
    print(f'{i}: {fn} size={im.size} mode={im.mode}')
    dst = f'assets/wedding/wardrobe_{i}.jpg'
    im.convert('RGB').save(dst, 'JPEG', quality=95, optimize=True)
    print(f'Saved -> {dst}')
