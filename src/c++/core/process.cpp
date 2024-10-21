#include "../../../include/process.h"
#include <iostream>

Process::Process(const std::string& name) : name(name), running(false) {}

void Process::run() {
    running = true;
    std::cout << "Ejecutando proceso: " << name << std::endl;
}

void Process::terminate() {
    running = false;
    std::cout << "Proceso terminado: " << name << std::endl;
}