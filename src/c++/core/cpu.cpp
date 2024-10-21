#include <iostream>
#include <stdint.h>
#include "cpu.h"
#include "memory.h"

CPU::CPU(Memory* memory) : memory(memory) {
    for (int i = 0; i < 16; ++i) {
        registers[i] = 0;
    }
    program_counter = 0;
}

void CPU::execute_instruction() {
    uint8_t instruction = memory->read(program_counter);
    program_counter++;

    switch (instruction) {
        case 0x01: // ADD
            registers[1] += registers[0];
            break;
        case 0x02: // NEW INSTRUCTION
            break;
        default:
            std::cerr << "Instrucción no reconocida: " << std::hex << (int)instruction << std::endl;
            break;
    }

    handle_input(); // Handle input
    render_output(); // Render output
}

void CPU::handle_input() {
    // Logic for handling keyboard input
}

void CPU::render_output() {
    // Logic for rendering the output on the screen
}