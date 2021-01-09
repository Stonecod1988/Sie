from django.db import models

# Create your models here.
from rest_framework.schemas.generators import endpoint_ordering


class CategorieMesure(models.Model):
    titre = models.CharField(max_length=100)

    # Redefinition de l'afichage
    def __str__(self):
        return self.titre


class Mesure(models.Model):
    type = models.CharField(max_length=100)
    descriptif = models.CharField(max_length=500)
    categorie_mesure = models.ForeignKey(CategorieMesure, on_delete=models.PROTECT, related_name='mesures', default="",
                                         editable=True)

    # Redefinition de l'affichage
    def __str__(self):
        return self.type


class Indicateur(models.Model):
    code_indicateur = models.CharField(max_length=100)
    mesure = models.ForeignKey(Mesure, on_delete=models.PROTECT, related_name='indicateurs', default="", editable=True)

    # Redefinition de l'affichage
    def __str__(self):
        return self.code_indicateur


class Programme(models.Model):
    titre = models.CharField(max_length=255)

    # Redefinition de l'afichage
    def __str__(self):
        return self.titre


class Thematique(models.Model):
    intitule = models.CharField(max_length=255)
    programmes = models.ManyToManyField(Programme, related_name='thematiques', blank=True)
    indicateurs = models.ManyToManyField(Indicateur, related_name='thematiques', blank=True)

    # Redefinition de l'afichage
    def __str__(self):
        return self.intitule


class Projet(models.Model):
    code_projet = models.CharField(max_length=100)
    promoteur = models.CharField(max_length=100)
    intitule = models.CharField(max_length=255)
    description = models.CharField(max_length=500)
    thematique = models.ForeignKey(Thematique, on_delete=models.PROTECT, editable=True, default="", blank=False)

    # Redefinition de l'afichage
    def __str__(self):
        return self.intitule
