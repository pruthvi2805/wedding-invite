from PIL import Image, ImageOps, ImageDraw
import os

def create_circular_og_image(source_path, output_path):
    target_w = 1200
    target_h = 630
    bg_color = (255, 255, 255) # White as requested
    gold_color = (212, 175, 55) # #D4AF37
    
    # Framing specs from user config
    frame_size = 540
    border_width = 8

    with Image.open(source_path) as img:
        img = img.convert("RGBA")
        
        # Scale the caricature to fit inside the frame
        # We'll make it 540x540
        img_resized = img.resize((frame_size, frame_size), Image.Resampling.LANCZOS)
        
        # Create a circular mask
        mask = Image.new("L", (frame_size, frame_size), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, frame_size, frame_size), fill=255)
        
        # Apply mask to image
        img_circular = Image.new("RGBA", (frame_size, frame_size), (0, 0, 0, 0))
        img_circular.paste(img_resized, (0, 0), mask)
        
        # Create final canvas
        canvas = Image.new("RGB", (target_w, target_h), bg_color)
        
        # Draw the gold border circle on canvas first
        draw_canvas = ImageDraw.Draw(canvas)
        # Center coordinates
        center_x = target_w // 2
        center_y = target_h // 2
        
        # Bounding box for the gold circle (slightly larger than frame_size to account for border)
        half_f = frame_size // 2
        left = center_x - half_f - (border_width // 2)
        top = center_y - half_f - (border_width // 2)
        right = center_x + half_f + (border_width // 2)
        bottom = center_y + half_f + (border_width // 2)
        
        # Draw thick gold border
        draw_canvas.ellipse((left, top, right, bottom), outline=gold_color, width=border_width)
        
        # Paste the circular image in the center
        paste_x = center_x - half_f
        paste_y = center_y - half_f
        canvas.paste(img_circular, (paste_x, paste_y), img_circular)
        
        # Save as JPEG
        canvas.save(output_path, "JPEG", quality=95, optimize=True)
        
        file_size = os.path.getsize(output_path) / 1024
        print(f"Image saved to {output_path}")
        print(f"Dimensions: {canvas.size}")
        print(f"File size: {file_size:.2f} KB")

if __name__ == "__main__":
    source = "public/images/wedding-caricature.jpg"
    output = "public/images/og-image.jpg"
    create_circular_og_image(source, output)
