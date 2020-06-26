import nltk
import urllib.request
from bs4 import BeautifulSoup



response = urllib.request.urlopen('https://franzraven.github.io/')

html = response.read()

soup = BeautifulSoup(html, 'html.parser') #"html5lib")

text = soup.get_text(strip=True)

tokens = [t for t in text.split()]

print (tokens)
