height=float(input("entdr your height in m"))
weight=float(input("enter you weight in kg"))
bmi=weight/height**2;
print(f"your bmi is{bmi}")
if bmi<=18.5:
  print("your underwieght")
elif bmi<=25:
  print("normal wieght")
elif bmi<=30:
  print("bby your slightly overwieght")
elif bmi<=36:
  print("obessed mami")
else:
  print("clinically obessed")