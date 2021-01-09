from django.urls import path

from .views import *

urlpatterns = [
    path('thematiques', ThematiqueListView.as_view()),
    path('thematiques/<pk>', ThematiqueDetailView.as_view()),
    path('projets', ProjetListView.as_view()),
    path('projets/<pk>', ProjetDetailView.as_view()),
    path('programmes', ProgrammeListView.as_view()),
    path('programmes/<pk>', ProgrammeDetailView.as_view()),
    path('categories_mesures', CategorieMesureListView.as_view()),
    path('categories_mesures/<pk>', CategorieMesureDetailView.as_view()),
    path('mesures', MesureListView.as_view()),
    path('mesures/<pk>', MesureDetailView.as_view()),
    path('indicateurs', IndicateurListView.as_view()),
    path('indicateurs/<pk>', IndicateurDetailView.as_view()),
]
