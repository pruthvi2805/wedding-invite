from PIL import Image
import os

def ensure_transparency(path):
    try:
        img = Image.open(path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # If it's white-ish, make it transparent
            # The flourish is likely gold/dark lines on white or transparent.
            # If it's already transparent, great.
            if item[0] > 240 and item[1] > 240 and item[2] > 240 and item[3] > 0:
                 newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(path, "PNG")
        print(f"Processed {path}")
    except Exception as e:
        print(f"Error: {e}")

ensure_transparency(r"c:\Users\kauti\Invite\public\images\corner-flourish.png")
