#ifndef FILE_SYSTEM_H
#define FILE_SYSTEM_H

#include <string>
#include <map>

class FileSystem {
public:
    void createFile(const std::string& name, const std::string& content);
    std::string readFile(const std::string& name);
    void deleteFile(const std::string& name);

private:
    std::map<std::string, std::string> files; // Store files in a map
};

#endif