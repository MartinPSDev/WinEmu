from django.db import models

class EmulatorState(models.Model):
    memory_dump = models.TextField()
    registers = models.JSONField()
    program_counter = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

class Process(models.Model):
    pid = models.IntegerField(unique=True)
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=50)
    memory_usage = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

class File(models.Model):
    name = models.CharField(max_length=255)
    content = models.TextField()
    size = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
