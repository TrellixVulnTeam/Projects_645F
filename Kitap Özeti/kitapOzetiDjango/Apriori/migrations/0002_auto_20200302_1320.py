# Generated by Django 2.2.10 on 2020-03-02 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Apriori', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apriori',
            name='Kitap_Id',
            field=models.IntegerField(),
        ),
    ]
