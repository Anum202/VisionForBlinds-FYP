import pytesseract
import cv2
from pytesseract import Output
import numpy as np
import imutils

# set tesseract path
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# function to return text from image
# img = image loaded using BytesIO
# returns text
def ocr(img):
    # convert image to numpy array
    img = np.array(img)
    try:
        results = pytesseract.image_to_osd(img, output_type=Output.DICT)
        rotated = imutils.rotate_bound(img, angle=results["rotate"])
    except pytesseract.TesseractError as e:
        print(e)
        rotated=img
    # convert image to grayscale
    img = cv2.cvtColor(rotated, cv2.COLOR_RGB2GRAY)
    # apply threshold
    img = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]
    # apply blur
    img = cv2.medianBlur(img, 3)
    # get text from image
    text=pytesseract.image_to_string(img,lang='eng')
    # clean text
    print(text)
    clean_text = text.strip()
    clean_text= ' '.join(clean_text.split())
    # print(clean_text)
    # # return text
    # return clean_text

     # split text by lines
    lines = clean_text.splitlines()
    # print each line separately
    for line in lines:
        print(line)
    # return lines
    return lines


if __name__ == '__main__':
    # load image
    img = 'Capture.JPG'
    # read image
    img = cv2.imread(img)
    # convert image to RGB
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    # get text
    text = ocr(img)
    # print text
    print(text)