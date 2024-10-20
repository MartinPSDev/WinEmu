#include <iostream>
#include <stdint.h>
#include "cpu.h"
#include "memory.h"

class CPU {
public:
    CPU(Memory* memory) : memory(memory) {
        // Initialize CPU registers
        for (int i = 0; i < 16; ++i) {
            registers[i] = 0;
        }

        // Initialize the program counter
        program_counter = 0;
    }

    void execute_instruction() {
        // Read the current instruction
        uint8_t instruction = memory->read(program_counter);
        program_counter++;

        // Decodificar y ejecutar la instrucción
        switch (instruction) {
            case 0x01: // Instruction
                registers[1] += registers[0];
                break;
            default:
                std::cerr << "Instrucción no reconocida: " << std::hex << (int)instruction << std::endl;
                break;
        }
    }

private:
    Memory* memory;
    uint64_t registers[16]; // General registers
    uint64_t program_counter;
};