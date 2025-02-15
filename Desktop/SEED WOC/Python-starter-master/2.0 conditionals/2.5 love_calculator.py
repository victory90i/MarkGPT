name1=input("enter name1:")
name2=input("enter name2:")
combine_names=name1 + name2;
T=combine_names.count("t")
R=combine_names.count("r")
U=combine_names.count("u")
E=combine_names.count("e")
add_true=T + R + U + E;
L=combine_names.count("l")
O=combine_names.count("o")
V=combine_names.count("v")
E=combine_names.count("e")
add_love=L + O + V + E

final_score= str(add_true) + str(add_love)
score=int(final_score)
#if love score >90:romeo and ju
#if love score>70 and <89:wawa
#if love score>60 and<79:cat and mouse
if score>=60:
  print(name1 ,name2)
elif score>70:
  print("your in love")
elif score>89:
  print("wawa")
else:
  print("your love key is missing")
