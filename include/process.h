#ifndef PROCESS_H
#define PROCESS_H

#include <string>

class Process {
public:
    Process(const std::string& name);
    void run();
    void terminate();

private:
    std::string name;
    bool running;
};

#endif