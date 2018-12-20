
from rest_framework import serializers
from apps.shop.models import *


# Product
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'name', 'price')
        model = Product


# Category
class CategoryCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = (Category)
        fields = ('id', 'name', 'products')

class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)
    class Meta:
        model = (Category)
        fields = ('id', 'name', 'products')


# OrderItem
class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = (OrderItem)
        fields = ('id', 'number', 'product')

class OrderItemCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = (OrderItem)
        fields = ('id', 'number', 'product')


# Orde
class OrderSerializer(serializers.ModelSerializer):
    orders_items = OrderItemSerializer(many=True)
    class Meta:
        model = (Order)
        fields = ('id', 'sum', 'orders_items', 'datetime')

class OrderCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = (Order)
        fields = ('id', 'sum', 'orders_items', 'datetime')


# Report
class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = (Order)
        fields = ('id', 'sum', 'datetime')
