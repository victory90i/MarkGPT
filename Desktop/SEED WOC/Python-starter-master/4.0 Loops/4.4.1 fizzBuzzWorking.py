range_start=int(input("You want to start from: "))

rang_end=int(input("You want to end at: "));


# RUNNING OUR FOR LOOP HERE:
for i in range(1, 20):
  print(i)
  if i%3==0 and i%5==0:
    print("fiss buss")
  elif i%5==0:
    print("buss")
  elif i%3==0:
    print("fiss ")
else:
  print(i)
