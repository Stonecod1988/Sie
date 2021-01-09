from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView

from .serializers import *
from ..models import *


class ThematiqueListView(ListCreateAPIView):
    queryset = Thematique.objects.all()
    serializer_class = ThematiqueSerializer
    
    
class ThematiqueDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Thematique.objects.all()
    serializer_class = ThematiqueSerializer


class ProjetListView(ListCreateAPIView):
    queryset = Projet.objects.all()
    serializer_class = ProjetSerializer


class ProjetDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Projet.objects.all()
    serializer_class = ProjetSerializer


class ProgrammeListView(ListCreateAPIView):
    queryset = Programme.objects.all()
    serializer_class = ProgrammeSerializer


class ProgrammeDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Programme.objects.all()
    serializer_class = ProgrammeSerializer


class IndicateurListView(ListCreateAPIView):
    queryset = Indicateur.objects.all()
    serializer_class = IndicateurSerializer


class IndicateurDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Indicateur.objects.all()
    serializer_class = IndicateurSerializer


class CategorieMesureListView(ListCreateAPIView):
    queryset = CategorieMesure.objects.all()
    serializer_class = IndicateurSerializer


class CategorieMesureDetailView(RetrieveUpdateDestroyAPIView):
    queryset = CategorieMesure.objects.all()
    serializer_class = IndicateurSerializer


class MesureListView(ListCreateAPIView):
    queryset = Mesure.objects.all()
    serializer_class = MesureSerializer


class MesureDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Mesure.objects.all()
    serializer_class = MesureSerializer
