import os
import django
import random
from faker import Faker
from Sie.models import *

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Minepded.settings')
django.setup()
fakeagent = Faker()


def fixtures(n=0):
    for _ in range(n):
        cmesure = CategorieMesure.objects.get_or_create(titre=fakeagent.cryptocurrency_name())[0]
        programme = Programme.objects.get_or_create(titre='Programme ' + fakeagent.name())[0]
        cmesure.save()
        programme.save()
        for _ in range(n):
            cmesure = random.choice(CategorieMesure.objects.all())
            mesure = \
                Mesure.objects.get_or_create(type=fakeagent.job(), descriptif=fakeagent.text(),
                                             categorie_mesure=cmesure)[0]
            mesure.save()
            for _ in range(n):
                mesure = random.choice(Mesure.objects.all())
                indicateur = Indicateur.objects.get_or_create(code_indicateur=fakeagent.job(), mesure=mesure)[0]
                indicateur.save()
            thematique = \
                Thematique.objects.get_or_create(intitule='Thematique ' + fakeagent.name())[0]
            for _ in range(n):
                projet = \
                    Projet.objects.get_or_create(code_projet=fakeagent.cryptocurrency_code(),
                                                 promoteur=fakeagent.name(),
                                                 intitule=fakeagent.job(), description=fakeagent.text(),
                                                 thematique=thematique)[0]
                projet.save()


if __name__ == '__main__':
    print('fixtures en cours de chargement...')
    fixtures(5)
    print('fixtures terminee')
