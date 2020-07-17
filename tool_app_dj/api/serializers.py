from rest_framework import serializers

from tool_app_dj.models import ToolBox

class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToolBox
        fields = ('name','make','cost','location','type','image')
