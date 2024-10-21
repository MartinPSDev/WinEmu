#include "../../../include/memory.h" 
#include <iostream>
#include <cstdint>

uint8_t Memory::read(uint32_t address) {
    if (address >= sizeof(data) / sizeof(data[0])) {
        std::cerr << "Error: dirección fuera de límites" << std::endl;
        return 0;
    }
    return data[address];
}

void Memory::write(int address, int data) {
    if (static_cast<uint32_t>(address) >= sizeof(this->data)) {
        std::cerr << "Error: dirección fuera de límites" << std::endl;
        return;
    }
    this->data[address] = static_cast<uint8_t>(data);
}