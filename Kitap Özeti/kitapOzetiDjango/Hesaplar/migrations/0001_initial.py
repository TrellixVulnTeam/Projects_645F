# Generated by Django 2.2.10 on 2020-02-19 17:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Kullanicilar', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hesaplar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Hesap_No', models.BigIntegerField(verbose_name='Hesap Numarası')),
                ('Surec', models.CharField(default='Beklemede', max_length=12)),
                ('Kullanici_Id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Kullanicilar.Kullanicilar', verbose_name='Kullanıcı ID')),
            ],
        ),
    ]
