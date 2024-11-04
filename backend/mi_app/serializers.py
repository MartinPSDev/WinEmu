from rest_framework import serializers
from .models import EmulatorState, Process, File

class EmulatorStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmulatorState
        fields = '__all__'

class ProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Process
        fields = '__all__'

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'