from django.contrib import admin

from .models import *

# Register your models here.

admin.site.register(Thematique)
admin.site.register(Projet)
admin.site.register(Programme)
admin.site.register(Mesure)
admin.site.register(CategorieMesure)
admin.site.register(Indicateur)
