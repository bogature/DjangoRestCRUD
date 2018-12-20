
from django.contrib import admin
from apps.shop.models import Product, Category, OrderItem, Order


class OrderAdmin(admin.ModelAdmin):
    list_display = ('id','sum','datetime',)


admin.site.register(Product)
admin.site.register(Category)
admin.site.register(OrderItem)
admin.site.register(Order, OrderAdmin)