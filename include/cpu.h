#ifndef CPU_H
#define CPU_H
#include "memory.h"

class CPU {
public:
    CPU(Memory* memory);
    void execute_instruction();

private:
    Memory* memory;
    uint64_t registers[16];
    uint64_t program_counter;
};

#endif
