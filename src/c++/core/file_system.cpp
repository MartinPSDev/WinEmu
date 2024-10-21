#include "file_system.h"

void FileSystem::createFile(const std::string& name, const std::string& content) {
    files[name] = content;
}

std::string FileSystem::readFile(const std::string& name) {
    return files.count(name) ? files[name] : "Archivo no encontrado";
}

void FileSystem::deleteFile(const std::string& name) {
    files.erase(name);
}