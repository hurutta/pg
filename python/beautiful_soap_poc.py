from bs4 import BeautifulSoup
import requests


def health_check():
    url = "https://learnpython.com/blog/python-requirements-file/"
    req = requests.get(url)
    soup = BeautifulSoup(req.text, "html.parser")
    print(soup.title)


health_check()
#testing
