from django.contrib import admin

from .models import *

# Register your models here.
admin.site.site_header = 'Gestion du SIE'


class ThematiqueAdmin(admin.ModelAdmin):
    fields = ('intitule', 'programmes')
    list_filter = ('intitule', 'programmes')


class ProgrammeAdmin(admin.ModelAdmin):
    fields = ('titre',)
    list_filter = ('titre', 'thematiques')


class ProjetAdmin(admin.ModelAdmin):
    list_display = ('code_projet', 'intitule', 'description')
    list_filter = ('code_projet', 'intitule', 'promoteur')


class IndicateurAdmin(admin.ModelAdmin):
    list_display = ('id', 'code_indicateur', 'mesure')
    list_filter = ('code_indicateur', 'mesure')


class MesureAdmin(admin.ModelAdmin):
    list_display = ('id', 'type', 'descriptif', 'categorie_mesure')
    list_filter = ('categorie_mesure',)


class CategorieMesureAdmin(admin.ModelAdmin):
    list_display = ('id', 'titre')
    list_filter = ('titre',)


admin.site.register(Thematique, ThematiqueAdmin)
admin.site.register(Projet, ProjetAdmin)
admin.site.register(Programme, ProgrammeAdmin)
admin.site.register(Mesure, MesureAdmin)
admin.site.register(CategorieMesure, CategorieMesureAdmin)
admin.site.register(Indicateur, IndicateurAdmin)
