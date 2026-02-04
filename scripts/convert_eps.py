from PIL import Image
import os
import sys

def convert_eps_to_png(eps_path, png_path):
    print(f"Converting {eps_path} to {png_path}...")
    try:
        # Open EPS
        im = Image.open(eps_path)
        # Load to ensure it reads the data (trigger ghostscript if needed)
        im.load()
        
        # Convert to RGBA for transparency support
        im = im.convert("RGBA")
        
        # Resize if too huge (optional, but good for web) - skipping for now to keep quality
        # Save as PNG
        im.save(png_path, "PNG")
        print(f"Success: {png_path}")
    except Exception as e:
        print(f"Error converting {eps_path}: {e}")

base_path = r"c:\Users\kauti\Invite\public\images"

convert_eps_to_png(os.path.join(base_path, "wedding-couple.eps"), os.path.join(base_path, "wedding-couple.png"))
convert_eps_to_png(os.path.join(base_path, "reception-couple.eps"), os.path.join(base_path, "reception-couple.png"))
