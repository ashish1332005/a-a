from PIL import Image, ImageDraw, ImageOps, ImageFilter
import numpy as np

# Load original uploaded S SS monogram
im = Image.open('C:/Users/Ashish Sharma/.gemini/antigravity-ide/brain/9bfbee67-e706-4bba-9d31-0e49baa67dce/.user_uploaded/media_1790952003865.jpg')

# Find bounding box
gray = im.convert('L')
arr = np.array(gray)
mask = arr < 240
coords = np.argwhere(mask)
y0, x0 = coords.min(axis=0)
y1, x1 = coords.max(axis=0)

# Crop
cropped = im.crop((x0, y0, x1+1, y1+1)).convert('RGBA')
c_arr = np.array(cropped)
r, g, b, a = c_arr[:,:,0], c_arr[:,:,1], c_arr[:,:,2], c_arr[:,:,3]
# Transparency based on brightness
brightness = 0.299*r + 0.587*g + 0.114*b
alpha = 255 - brightness
alpha = np.clip(alpha * 1.4, 0, 255).astype(np.uint8)

# Color of the letters: dark royal emerald/black #182d20
mono_rgba = np.zeros_like(c_arr)
mono_rgba[:,:,0] = 24  # R
mono_rgba[:,:,1] = 45  # G
mono_rgba[:,:,2] = 32  # B
mono_rgba[:,:,3] = alpha
mono_clean = Image.fromarray(mono_rgba)

# Canvas for circle logo (supersampled 800x800 for crisp edges)
canvas_size = 800
canvas = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
draw = ImageDraw.Draw(canvas)

cx, cy = canvas_size // 2, canvas_size // 2
r_outer = 360
r_inner = 346

# Draw delicate double gold circle border
# Outer circle
draw.ellipse([cx - r_outer, cy - r_outer, cx + r_outer, cy + r_outer], outline=(197, 160, 89, 230), width=6)
# Inner circle
draw.ellipse([cx - r_inner, cy - r_inner, cx + r_inner, cy + r_inner], outline=(139, 101, 52, 180), width=3)

# Little decorative floral/diamond accents at 4 cardinal points (top, bottom, left, right)
accent_r = 6
for angle in [0, 90, 180, 270]:
    rad = np.deg2rad(angle)
    mid_r = (r_outer + r_inner) / 2
    px = int(cx + mid_r * np.cos(rad))
    py = int(cy + mid_r * np.sin(rad))
    draw.ellipse([px - accent_r, py - accent_r, px + accent_r, py + accent_r], fill=(197, 160, 89, 255))

# Scale and paste monogram in the exact center
target_mono_w = 460
target_mono_h = int(target_mono_w * mono_clean.height / mono_clean.width)
mono_resized = mono_clean.resize((target_mono_w, target_mono_h), Image.LANCZOS)
canvas.paste(mono_resized, (cx - target_mono_w//2, cy - target_mono_h//2), mono_resized)

# Downscale to 400x400 with high quality anti-aliasing
final_logo = canvas.resize((400, 400), Image.LANCZOS)
final_logo.save('assets/wedding/logo.png', 'PNG')
final_logo.save('assets/wedding/ss_circle_logo.png', 'PNG')
print('Successfully created clean SS circle logo!')
