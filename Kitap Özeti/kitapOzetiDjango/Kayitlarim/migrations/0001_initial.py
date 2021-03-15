# Generated by Django 2.2.10 on 2020-03-10 10:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Kullanicilar', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Kayitlarim',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Kitap_Adi', models.CharField(max_length=100, verbose_name='Kitap Adı')),
                ('Kitap_Yazari', models.CharField(max_length=32, verbose_name='Kitap Yazarı')),
                ('Kitap_Türü', models.CharField(max_length=32, verbose_name='Kitap Türü')),
                ('Kitap_Ozeti', models.CharField(max_length=5000, verbose_name='Kitap Özeti')),
                ('Kitap_Olusturan_Id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Kullanicilar.Kullanicilar')),
            ],
        ),
    ]
