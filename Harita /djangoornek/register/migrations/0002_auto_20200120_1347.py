# Generated by Django 2.2.9 on 2020-01-20 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registers',
            name='langitute',
            field=models.FloatField(max_length=30),
        ),
    ]
