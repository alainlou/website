
When I was in high school, I didn't know and was really curious about what a computer actually does when I write some code and run it.

How does a computer execute C++ or Python?
- Depending on the language it may be compiled (C, C++) or interpreted (Python, Java)
- Compile: "translate this program from this language to machine code" - these become ".exe" on Windows
- Interpret: "run an executable program (like the python interpreter), which "interprets" your program line-by-line.
  - **Note**: the Python interpreter itself is a compiled program written in C. _Your_ program is basically a text file that's fed in as input.
- In the end everything is machine code (instructions in the instruction set of the processor)
- There's languages that do a mix of both compile and interpret - Java gets compiled into a more efficient "ByteCode" which is interpreted by the JVM (Java Virtual Machine)
- This is why there is no REPL for C++ but there is for Python

Why do I have to "download" Java or Python? Why are the tools for C++ so much more involved (why can't I just "download" C++)?
- When you download Python or Java, you most likely downloaded the official interpreter (CPython or Oracle JVM) and libraries
- When you download C++, you download one of the C++ compilers (gcc, clang, MSVC) and an implementation of standard C++ libraries
  - Coincidentally, there is no "official" C++ compiler and there is no consensus on what the "right" one to use is
  - C++ code may be even incompatible between different C++ compiler
    - The incompatibility somewhat comes from the nature of more "low-level programming"

What are libraries? Can I create one myself?
- It's just code that someone wrote, when you include the library you just bundle their code with your program in some way (different ways below)

Source code libraries
- These are
- These you can write pretty easily
Static libraries/shared libraries - applicable for compiled languages
- This is machine code that
- You have to tell the compiler
- ** Caveat ** not shared libraries
- In compiled languages like C or C++ the compiler will copy and paste the library code right where you have the `#include`
- In
- Yes you can create libraries yourself

What does pressing the "run" button on the IDE actually do?
- I have to admit, in my high school life, I've never executed a program from the command line
- I've always pressed "run" in Python IDLE or on Eclipse
- `python3 program.py`
- `javac program.java`, `java program.class`
- `gcc program.c -o program`, `./program`

How does terminal output work (what does `print` do)?
- In the old days a termina like a 9-pin serial port
- UART ASCII encoding
- That's why now the "terminal" programs on computers are called "terminal" emulators

How does emulator work?

Why does `main` always get executed - how does the computer know?
- For interpreted languages:
- For compiled languages: A program is a series of instructions, and the first instructions start at the start of the `main` function


How does multitasking actually work? How can I run a python program at the same time as I watch YouTube?
- For older computers the CPU did everything
- Offload to display
- Time slicing OS

Why use a database instead of large array?
- Array is in-memory of the device you're using
- a database provides
1. (if it's a service) single source of truth
2. faster query and insertion
3. reliability, durability (doesn't go away when you shut down the phone, backed up on secondary storage)

How does a computer actually work? Like from the bottom?
- You should try learning Verilog or VHDL (some hardware description language)
- Try building simple circuits, and maybe follow along with a computer organization class
