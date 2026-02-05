from PIL import Image, ImageOps
import os

def create_padded_og_image(source_path, output_path):
    target_w = 1200
    target_h = 630
    bg_color = (61, 43, 82) # #3D2B52 in RGB

    with Image.open(source_path) as img:
        # Convert to RGBA if needed (though it's a jpg)
        img = img.convert("RGBA")
        
        # Create the canvas
        canvas = Image.new("RGB", (target_w, target_h), bg_color)
        
        # Calculate scaling for the caricature
        # We want it to fit nicely within the 630 height. 
        # Let's leave a small margin, say 5% on top/bottom.
        margin = 20
        available_h = target_h - (margin * 2)
        
        # Scale the square image to available_h
        img_resized = img.resize((available_h, available_h), Image.Resampling.LANCZOS)
        
        # Position in the center
        offset_x = (target_w - available_h) // 2
        offset_y = margin
        
        # Paste onto canvas
        canvas.paste(img_resized, (offset_x, offset_y), img_resized)
        
        # Save as JPEG
        canvas.save(output_path, "JPEG", quality=90, optimize=True)
        
        file_size = os.path.getsize(output_path) / 1024
        print(f"Image saved to {output_path}")
        print(f"Dimensions: {canvas.size}")
        print(f"File size: {file_size:.2f} KB")

if __name__ == "__main__":
    source = "public/images/wedding-caricature.jpg"
    output = "public/images/og-image.jpg"
    create_padded_og_image(source, output)
