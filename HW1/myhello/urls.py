from django.urls import path
from . import views

urlpatterns = [
    path('addcourse', views.addcourse, name='add_course'),
    path('courselist', views.courselist, name='course_list'),
]