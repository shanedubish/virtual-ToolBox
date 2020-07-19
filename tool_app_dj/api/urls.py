from django.urls import path

from .views import ToolsListView, ToolsGetUpdateDelete,ToolsCreate

urlpatterns = [
    path('', ToolsListView.as_view() ),
    path('<pk>', ToolsGetUpdateDelete.as_view() ),
    path('create/', ToolsCreate.as_view() ),
]
