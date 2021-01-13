ls = [2,3,4,5,68,765,567,46,7,8,4584568,58476946759]



while True:
    res =  (input("Guess a Number, or type q to quit\n"))
    
    if res == "q":
        break

    if res != "q":
        res = int(res)
           
    if res in ls:
        print("your win!")
    
    if res not in ls:
        print("nope")
    
    



