words=["cats","rats","play","swim"]
import random
chosen_words= random.choice(words)
print(f"the word chosen is {chosen_words}")

guess=input("guess letter....")
display=[]
for i in range (len(chosen_words)):
  display+="_"
print(display)
for position in range(len(chosen_words)):
  letter=chosen_words[position]
  if letter==guess:
    print("yes")
    display[position]=guess
    print(display)
  else:
    print("no")
  