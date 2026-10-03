import sys
from PIL import Image, ImageFilter
import numpy as np
from collections import deque

src_path = r"C:\Users\Ashish Sharma\.gemini\antigravity-ide\brain\9bfbee67-e706-4bba-9d31-0e49baa67dce\.user_uploaded\media_1791010270458.jpg"
out_path = r"d:\b8\assets\wedding\venue_pushkara_building.png"

img = Image.open(src_path).convert("RGBA")
data = np.array(img)

h, w, _ = data.shape
rgb = data[:, :, :3]
# The black background is mostly R<20, G<20, B<20
is_black = np.all(rgb < 22, axis=-1)

# Flood fill from border pixels
visited = np.zeros((h, w), dtype=bool)
q = deque()

# Add all perimeter pixels that are black
for x in range(w):
    if is_black[0, x] and not visited[0, x]:
        q.append((0, x))
        visited[0, x] = True
    if is_black[h-1, x] and not visited[h-1, x]:
        q.append((h-1, x))
        visited[h-1, x] = True

for y in range(h):
    if is_black[y, 0] and not visited[y, 0]:
        q.append((y, 0))
        visited[y, 0] = True
    if is_black[y, w-1] and not visited[y, w-1]:
        q.append((y, w-1))
        visited[y, w-1] = True

# BFS to only mark the outer black background
while q:
    y, x = q.popleft()
    for dy, dx in [(-1,0), (1,0), (0,-1), (0,1)]:
        ny, nx = y + dy, x + dx
        if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
            if is_black[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))

# visited == True is the outer background!
alpha = np.where(visited, 0, 255).astype(np.uint8)

# Create alpha mask and apply slight gaussian blur on mask edges for super smooth antialiasing
mask_img = Image.fromarray(alpha, mode='L')
# Smooth edges slightly
mask_img = mask_img.filter(ImageFilter.GaussianBlur(0.8))

data[:, :, 3] = np.array(mask_img)
result_img = Image.fromarray(data)
result_img.save(out_path, "PNG")
print(f"Saved transparent building image to {out_path} with size {result_img.size}")
