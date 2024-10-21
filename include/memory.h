#ifndef MEMORY_H
#define MEMORY_H

#include <cstdint>
#include <iostream>
#include <vector> //  vector for dynamic memory management

class Memory {
public:
    Memory(size_t size = 256); // Constructor with dynamic size
    uint8_t read(uint32_t address);
    void write(int address, int data);
    void allocate(size_t size); // Method for allocating memory

private:
    std::vector<uint8_t> data; // Use vector for storage
};

#endif