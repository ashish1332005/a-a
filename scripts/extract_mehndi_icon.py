from PIL import Image, ImageFilter
import numpy as np

src_path = r"C:\Users\Ashish Sharma\.gemini\antigravity-ide\brain\9bfbee67-e706-4bba-9d31-0e49baa67dce\.user_uploaded\media_1791017866626.jpg"
out_path = r"d:\b8\assets\wedding\mehndi_ceremony_icon.png"

img = Image.open(src_path).convert("RGBA")
data = np.array(img)

h, w, _ = data.shape
rgb = data[:, :, :3]
# Any near-black pixel (R<30, G<30, B<30) anywhere in this artwork is background
is_black = np.all(rgb < 32, axis=-1)

alpha = np.where(is_black, 0, 255).astype(np.uint8)

# Smooth edges
mask_img = Image.fromarray(alpha)
mask_img = mask_img.filter(ImageFilter.GaussianBlur(0.6))

data[:, :, 3] = np.array(mask_img)
result_img = Image.fromarray(data)
result_img.save(out_path, "PNG")
print(f"Saved cleanly isolated mehndi ceremony art to {out_path} ({result_img.size})")
