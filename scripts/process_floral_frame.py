import numpy as np
from PIL import Image, ImageFilter

src_path = r"C:\Users\Ashish Sharma\.gemini\antigravity-ide\brain\9bfbee67-e706-4bba-9d31-0e49baa67dce\.user_uploaded\media_1791011485584.jpg"
out_path = r"d:\b8\assets\wedding\invitation_card_bg.jpg"

img = Image.open(src_path).convert("RGB")
arr = np.array(img).astype(np.float32)

# Convert to HSV to measure saturation and color
hsv_img = img.convert("HSV")
hsv_arr = np.array(hsv_img)
sat = hsv_arr[:, :, 1].astype(np.float32) # Saturation 0..255
val = hsv_arr[:, :, 2].astype(np.float32) # Value 0..255

# Calculate max diff between R, G, B channels (gray checkerboard has diff < 8)
r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
color_diff = np.maximum(np.maximum(np.abs(r - g), np.abs(g - b)), np.abs(r - b))

# The checkerboard is where color_diff < 12 and (val > 150)
is_checker = (color_diff < 14) & (sat < 15) & (val > 140)

# Create a warm, royal ivory textured background
h, w, _ = arr.shape
# Base ivory color #FFFDF8 -> [255, 253, 248]
ivory_bg = np.zeros((h, w, 3), dtype=np.float32)
ivory_bg[:, :, 0] = 255.0  # R
ivory_bg[:, :, 1] = 253.0  # G
ivory_bg[:, :, 2] = 248.0  # B

# Add subtle warm royal parchment / vignette gradient
y_coords, x_coords = np.mgrid[0:h, 0:w]
cx, cy = w / 2.0, h / 2.0
dist_from_center = np.sqrt(((x_coords - cx) / cx)**2 + ((y_coords - cy) / cy)**2)
vignette = np.clip(1.0 - 0.04 * dist_from_center, 0.95, 1.0)

ivory_bg[:, :, 0] *= vignette
ivory_bg[:, :, 1] *= vignette
ivory_bg[:, :, 2] *= vignette

# Alpha mask of foreground floral + gold border
# Smooth the checker mask
mask = np.where(is_checker, 0.0, 1.0)

# We want smooth transition
mask_img = Image.fromarray((mask * 255).astype(np.uint8))
mask_img = mask_img.filter(ImageFilter.GaussianBlur(0.6))
smooth_mask = np.array(mask_img).astype(np.float32) / 255.0
smooth_mask = np.expand_dims(smooth_mask, axis=-1)

# Blend original artwork with clean ivory background
result = arr * smooth_mask + ivory_bg * (1.0 - smooth_mask)
result = np.clip(result, 0, 255).astype(np.uint8)

res_img = Image.fromarray(result)
res_img.save(out_path, "JPEG", quality=96)
print(f"Successfully saved clean ivory floral frame background to {out_path} ({res_img.size})")
