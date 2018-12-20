from django.urls import path

from apps.shop.views import *

urlpatterns = [

    # Product
    path('product/all/', ProductList.as_view()),
    path('product/create/', ProductCreate.as_view()),
    path('product/del/<int:id>/', ProductDelete.as_view()),
    path('product/upg/<int:id>/', ProductUpdate.as_view()),
    path('product/get/<int:id>/', ProductDetail.as_view()),

    # Category
    path('сategory/all/', CategoryList.as_view()),
    path('сategory/create/', CategoryCreate.as_view()),
    path('сategory/del/<int:id>/', CategoryDelete.as_view()),
    path('сategory/upg/<int:id>/', CategoryUpdate.as_view()),

    # OrderItem
    path('order/item/all/', OrderItemList.as_view()),
    path('order/item/create/', OrderItemCreate.as_view()),
    path('order/item/del/<int:id>/', OrderItemDelete.as_view()),
    path('order/item/upg/<int:id>/', OrderItemUpdate.as_view()),

    # Order
    path('order/all/', OrderList.as_view()),
    path('order/create/', OrderCreate.as_view()),
    path('order/del/<int:id>/', OrderDelete.as_view()),
    path('order/upg/<int:id>/', OrderUpdate.as_view()),

    # Report
    path('get/report/', ReportDetail.as_view()),

]