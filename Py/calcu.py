#!/usr/bin/env python

num1 = float(input("ingrese 1° num \n"))
num2 = float(input("ingrese 2° num \n"))

print("1) suma: \n")
print("2) resta: \n")
print("3) multiplicacion: \n")
print("4) division: \n")

op  = int(input("ingrese num de operación: \n"))

print (num1, num2, op)

if op == 1:
    sum = num1 + num2
    print("resultado de la suma: ")
    print (sum)

elif op == 2:
    rest = num1 - num2
    print("resultado de la resta: ")
    print (rest)

elif op == 3:
    mult = num1 * num2
    print("resultado de la multiplicatio: ")
    print (mult)

elif op == 4:
    div = num1 / num2
    print("resultado de la divitio" )
    print (div)
