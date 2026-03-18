from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
from django.http import HttpResponse
import json
import logging

from .models import Course_table

logger = logging.getLogger('django')

@api_view(['GET'])
def addcourse(request):
    department = request.GET.get('department', '')
    coursetitle = request.GET.get('coursetitle', '')
    instructor = request.GET.get('instructor', '')

    if department and coursetitle and instructor:
        new_post = Course_table()
        new_post.Department = department
        new_post.CourseTitle = coursetitle
        new_post.Instructor = instructor
    
        new_post.save()
        logger.debug(" ************** course_api: " + coursetitle)
        return Response({"data": coursetitle + "insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )
@api_view(['GET'])
def courselist(request):
    courses= Course_table.objects.all().values()
    return HttpResponse(
        json.dumps(list(courses), ensure_ascii=False),
        content_type='application/json; charset=utf-8'
    )