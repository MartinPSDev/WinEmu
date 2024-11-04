from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import EmulatorState, Process, File
from .serializers import EmulatorStateSerializer, ProcessSerializer, FileSerializer

class EmulatorStateViewSet(viewsets.ModelViewSet):
    queryset = EmulatorState.objects.all()
    serializer_class = EmulatorStateSerializer

    @action(detail=False, methods=['post'])
    def save_state(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class ProcessViewSet(viewsets.ModelViewSet):
    queryset = Process.objects.all()
    serializer_class = ProcessSerializer

    @action(detail=True, methods=['post'])
    def terminate(self, request, pk=None):
        process = self.get_object()
        process.status = 'terminated'
        process.save()
        return Response({'status': 'process terminated'})

class FileViewSet(viewsets.ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerializer
