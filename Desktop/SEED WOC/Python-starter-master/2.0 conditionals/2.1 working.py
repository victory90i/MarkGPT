# name=input("enter my name").lower();
# if name=="gita":
#   print("correct");
# else:
#   print("wrong");
# num=int(input("enter number to check"))
# if num%2==0:
#   print("even")
# else:
#   print("odd")


# NESTED IF'S

# i need the age and height

height=float(input("enter your height in m"));
age=int(input("enter your age"))
if height >1.5:
  # print("you are taken")
  if age <= 14:
    print("under 14")
  elif age<=16:
    print("under 16")
  elif age<=18:
    print("under 18")

    gender=input("enter your gender please").lower()
    if gender=="male":
      print("not selected, it turns out, you are male")
    else:
      print("you are selected bby")
  else:
    print("you are over age")
else:
  print("you are out go home")