from PIL import  Image

imgobj = Image.open('tronador2.jpg')
data = imgobj.getdata()

print(data)



