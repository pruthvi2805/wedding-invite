from PIL import Image, ImageDraw
import os

def remove_white_bg_flood(input_path, output_path, tolerance=30):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        # We'll use a flood fill approach from the corners to avoid deleting internal whites
        # actually, Pillow's ImageDraw.floodfill is perfect for this
        
        # Create a seed point at (0,0) - assuming top left is background
        # We need to target the background color. 
        # Let's verify the top-left pixel color first.
        bg_color = img.getpixel((0, 0))
        
        # Define a function to check if a pixel matches the background within tolerance
        def is_bg(pixel):
            return (abs(pixel[0] - bg_color[0]) <= tolerance and
                    abs(pixel[1] - bg_color[1]) <= tolerance and
                    abs(pixel[2] - bg_color[2]) <= tolerance)

        # Since Pillow's floodfill doesn't support tolerance easily with a simple call in older versions,
        # and we want to be robust, let's try a simple "replace white" first but scoped.
        # Actually, let's use the floodfill method provided by ImageDraw if meaningful, or 
        # just do a BFS for safety. 
        
        # BFS Implementation for Flood Fill Transparency
        width, height = img.size
        pixels = img.load()
        
        # Queue for BFS: (x, y)
        queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)] 
        visited = set(queue)
        
        # Target transparent color
        transparent = (0, 0, 0, 0)
        
        while queue:
            x, y = queue.pop(0)
            current_color = pixels[x, y]
            
            # If it's already transparent, skip
            if current_color[3] == 0:
                continue
                
            # Check if it's "white-ish" (background)
            if is_bg(current_color):
                pixels[x, y] = transparent
                
                # Add neighbors
                for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
        img.save(output_path, "PNG")
        print(f"Saved transparent image to {output_path}")
        
    except Exception as e:
        print(f"Failed to process {input_path}: {e}")

base_path = r"c:\Users\kauti\Invite\public\images"

# Process Wedding Couple
remove_white_bg_flood(
    os.path.join(base_path, "wedding-couple.jpg"),
    os.path.join(base_path, "wedding-couple-clean.png")
)

# Process Reception Couple
remove_white_bg_flood(
    os.path.join(base_path, "reception-couple.jpg"),
    os.path.join(base_path, "reception-couple-clean.png")
)
