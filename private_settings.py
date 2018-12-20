
import os

from testing.settings import BASE_DIR


PUBLIC_FILES_DIR = os.path.dirname(__file__)

STATIC_ROOT = os.path.join(PUBLIC_FILES_DIR, 'static-collection')
MEDIA_ROOT = os.path.join(PUBLIC_FILES_DIR, 'media')
STATICFILES_DIRS = [os.path.join(PUBLIC_FILES_DIR, 'static')]

ADMINS = MANAGERS = (('Andry', 'o.bogature@gmail.com'), )
