# Generated by Django 4.0.3 on 2022-03-08 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='InforSensor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nhiet_do', models.IntegerField()),
                ('do_am', models.IntegerField()),
                ('anh_sang', models.IntegerField()),
            ],
        ),
        migrations.RemoveField(
            model_name='statusledred',
            name='time_public',
        ),
    ]