// memory.h
#ifndef MEMORY_H
#define MEMORY_H

#include <cstdint>
#include <iostream>

class Memory {
public:
    Memory() = default;  // Default constructor
    uint8_t read(uint32_t address);      // read method declaration, function body missing
    void write(int address, int data);    // write method declaration, function body missing

private:
    uint8_t data[256];
};  

#endif