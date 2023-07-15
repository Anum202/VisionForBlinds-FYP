from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials
subscription_key = "c58f902735b14cf5b0d3bee38b4e2032"
endpoint = "https://rafayimagecaption.cognitiveservices.azure.com"

computervision_client = ComputerVisionClient(endpoint, CognitiveServicesCredentials(subscription_key))


# function to get image caption
def get_caption(img):
    caption= computervision_client.describe_image_in_stream(img,language='en')
    return caption.captions[0].text # type: ignore
    
