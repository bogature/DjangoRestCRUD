
from django.conf import settings


def get_current_url(request):
    return request.path.replace('/%s/' % request.LANGUAGE_CODE, '', 1)

def defaults(request):
    return {
        'CSS_URL': settings.CSS_URL,
        'JS_URL': settings.JS_URL,
        'IMG_URL': settings.IMG_URL,
        'LIB_URL': settings.LIB_URL,
        'MEDIA_URL': settings.MEDIA_URL,
        'STATIC_URL': settings.STATIC_URL,
        'CURRENT_URL': get_current_url(request),
        'SITE_NAME': settings.SITE_NAME
    }
