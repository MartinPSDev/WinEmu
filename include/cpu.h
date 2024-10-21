#ifndef CPU_H
#define CPU_H
#include "memory.h"
#include "keyboard.h" 
#include "video.h"    

class CPU {
public:
    CPU(Memory* memory);
    void execute_instruction();

private:
    Memory* memory;
    uint64_t registers[16];
    uint64_t program_counter;
    void handle_input(); // Input handling
    void render_output(); // Render output
};

#endif