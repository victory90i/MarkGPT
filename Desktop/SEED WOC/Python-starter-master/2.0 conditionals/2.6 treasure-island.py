print('''

##### #####  ######   ##    ####  #    # #####  ######    #  ####  #        ##   #    # #####  
  #   #    # #       #  #  #      #    # #    # #         # #      #       #  #  ##   # #    # 
  #   #    # #####  #    #  ####  #    # #    # #####     #  ####  #      #    # # #  # #    # 
  #   #####  #      ######      # #    # #####  #         #      # #      ###### #  # # #    # 
  #   #   #  #      #    # #    # #    # #   #  #         # #    # #      #    # #   ## #    # 
  #   #    # ###### #    #  ####   ####  #    # ######    #  ####  ###### #    # #    # #####  

''')

print("Welcome to the treasure island game");


# You are at a cross road do you to go 'left or right'
print("you are at a cross road");
direction=input("choose the left or right direction");
if direction=="left":
  print("ahead of you theres a river will you swim or wait gurl");
  cross=input("swim or wait?");
  if cross=="wait":
    print("good for you now there are three doors ahead which do you choose");
    door=input("which door red,yellow,blue");
    if door=="yellow":
      print("right choice you win bby gurl");
    else:
      print("you lost")
  else:
    print("game over")
else:
  print("game over too early try again")

# left-> You come to a lake . there is an island in the middle of the lake type 'wait'  to 'wait' to wait for a boat. type 'swim ' to swim across;;;
# swim you got attacked by an angry triut. Game over

# wait->you arrived at the island unharmed.there is a house with 3 doors , one yellow and one blue , which color you choose?
# blue-> you entered a room of beast game over
