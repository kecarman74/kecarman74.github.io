print("Care for a game of Rock Paper Scissors?")
print("I Promise to use only psuedo random guesses.")
j = int(input("Type 0=No 1=Yes "))
if j > 1:
    print("I'll take that as a yes")
    j = 1
while j == 1:
    import random as ran
    print("Make Your Choice Puny Human! Hwahhahha!!!")
    print("Type 1 = Rock, 2 = Paper, 3 = Scissors")
    x = int(input("Your Choice? "))
    y = ran.randrange(1,3)
    if x == y:
        print("A draw! Play again? Can your carbon based brain handle it?")
    elif (x < 1) or (x > 3):
        print("I'm sure you meant paper")
        x = 2
        if (x == 1) and (y == 2):
            print("You Lose")
            print("Haha, I envelope your rock. How pathetic!")
        elif (x == 1) and (y == 3):
            print("You Win")
            print("You crushed my crude cutting device. You must feel lucky.")
        elif (x == 2) and (y == 1):
            print("You Win")
            print("You enveloped my rock! My fellow silicon based object.")
        elif (x == 2) and (y == 3):
            print("You Lose")
            print("I slice your paper to ribbons, Hahah!")
        elif (x == 3) and (y == 1):
            print("You Lose")
            print("I crush your scissors with my mighty rock! Silicon Rules!")
        elif (x == 3) and (y == 2):
            print("You Win")
            print("Well played, why did I pick paper? So dumb.")
    print("Play again?")
    j = int(input("Type 0=No 1=Yes "))        
