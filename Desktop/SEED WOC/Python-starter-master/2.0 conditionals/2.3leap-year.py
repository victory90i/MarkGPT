year=int(input("enter a year"))
if year%4==0:
  if year%100==0:
    if year%400==0:
      print("its a leap year")
  else:
    print(" a leap year")
else:
  print("yes leap year but not sufficient enough")
