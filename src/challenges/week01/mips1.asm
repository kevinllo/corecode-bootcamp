  .data
        message: .asciiz "\nHello, World!\n"
  .text
        main:
              li $v0, 4
              la $a0, message
              syscall