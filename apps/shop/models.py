
from django.db import models


class Product(models.Model):

    name = models.CharField(max_length=50)

    price = models.FloatField()

    def __str__(self):
        return self.name


class Category(models.Model):

    name = models.CharField(max_length=50)

    products = models.ManyToManyField(Product)

    def __str__(self):
        return self.name


class OrderItem(models.Model):

    number = models.IntegerField()

    product = models.OneToOneField(Product, on_delete=models.CASCADE)


class Order(models.Model):

    sum = models.FloatField()

    orders_items = models.ManyToManyField(OrderItem)

    datetime = models.DateTimeField(null=True, blank=True)


class Report(models.Model):

    sum = models.FloatField(null=True, blank=True)

    datetime = models.DateTimeField(null=True, blank=True)