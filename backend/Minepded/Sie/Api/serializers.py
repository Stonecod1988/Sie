from rest_framework import serializers

from ..models import *


class ThematiqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thematique
        fields = ('id', 'intitule', 'programmes', 'indicateurs')


class ProjetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projet
        fields = ('id', 'code_projet', 'intitule', 'promoteur', 'thematique')


class IndicateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Indicateur
        fields = ('id', 'code_indicateur', 'mesure')


class CategorieMesureSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategorieMesure
        fields = ('id', 'titre')


class MesureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesure
        fields = ('id', 'type', 'descriptif', 'categorie_mesure')


class ProgrammeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programme
        fields = ('id', 'titre', 'thematiques')
